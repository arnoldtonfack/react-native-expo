import { useUser } from "@/hooks/userUser";
import { client, databases } from "@/lib/appWrite";
import { createContext, useEffect, useState } from "react";
import { ID, Models, Permission, Query, Role } from "react-native-appwrite";

interface booksProps {
  children: React.ReactNode;
}

// ton Book « métier »
export interface Book {
  title: string;
  author: string;
  description: string;
  userId: string;
}

// un document Appwrite complet
export type BookDocument = Models.Document & Book;

interface BooksContextType {
  books: BookDocument[];
  fetchBooks: () => Promise<void>;
  fetchBookById: (id: string) => Promise<BookDocument | undefined>;
  createBook: (book: Omit<Book, keyof Models.Document | "userId">) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
}

const DATABASE_ID = "689a89ac00336af31efb";
const COLLECTION_ID = "689a8af4003a1a31207b";

export const BooksContext = createContext<BooksContextType | null>(null);

export const BooksProvider: React.FC<booksProps> = ({ children }) => {
  const [books, setBooks] = useState<BookDocument[]>([]);
  const { user } = useUser();

  // fetch all books of the user
  async function fetchBooks() {
    if (!user) {
      setBooks([]);
      return;
    }

    try {
      const response = await databases.listDocuments<BookDocument>(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );
      setBooks(response.documents);
    } catch (error) {
      console.error("fetchBooks error:", error);
    }
  }

  // fetch one book by id
  async function fetchBookById(id: string): Promise<BookDocument | undefined> {
    try {
      const response = await databases.getDocument<BookDocument>(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
      return response;
    } catch (error) {
      console.error("fetchBookById error:", error);
    }
  }

  // create a new book
  async function createBook(book: Omit<Book, keyof Models.Document | "userId">) {
    if (!user) throw new Error("Utilisateur non authentifié");

    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...book, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error: any) {
      console.error("createBook error:", error.message);
    }
  }

  // delete a book
  async function deleteBook(id: string) {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
      setBooks((prev) => prev.filter((b) => b.$id !== id));
    } catch (error: any) {
      console.error("deleteBook error:", error.message);
    }
  }

  // realtime subscription
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

    if (user) {
      fetchBooks();
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response as { payload: BookDocument; events: string[] };
        if (events.some((e) => e.includes("create"))) {
          setBooks((prev) => [...prev, payload]);
        }
        if (events.some((e) => e.includes("delete"))) {
          setBooks((prev) => prev.filter((b) => b.$id !== payload.$id));
        }
      });
    } else {
      setBooks([]);
    }

    return () => unsubscribe?.();
  }, [user]);

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        fetchBookById,
        createBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
