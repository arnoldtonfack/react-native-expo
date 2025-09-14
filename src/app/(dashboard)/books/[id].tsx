import Specer from "@/components/Specer";
import ThemeButton from "@/components/ThemeButton";
import ThemeCard from "@/components/ThemeCard";
import ThemedLoader from "@/components/ThemedLoader";
import ThemeText from "@/components/ThemeText";
import ThemeView from "@/components/ThemeView";
import { Colors } from "@/constant/colors";
import { BookDocument } from "@/context/BooksContext";
import { useBooks } from "@/hooks/useBook";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

const BookDetail = () => {
  const [book, setBook] = useState<BookDocument | null>(null);

  const { fetchBookById, deleteBook } = useBooks();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    async function loadBook() {
      if (!id) return;

      const bookId = Array.isArray(id) ? id[0] : id;
      const bookData = await fetchBookById(bookId);

      setBook(bookData ?? null);
    }

    loadBook();
  }, [id]);

 async function handleDelete() {
  if (!id) return;

  // si id est un tableau, prends le premier élément
  const bookId = Array.isArray(id) ? id[0] : id;

  await deleteBook(bookId);
  setBook(null);
  router.replace("/books");
}


  if (!book) {
    return (
      <ThemeView safe={true} style={styles.container}>
        <ThemeText>Chargement du livre...</ThemeText>
      </ThemeView>
    );
  }

  if (!book) {
    return (
      <ThemeView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemeView>
    );
  }

  return (
    <ThemeView safe={true} style={styles.container}>
      <ThemeCard style={styles.card}>
        <ThemeText style={styles.title}>{book.title}</ThemeText>
        <ThemeText>Written by {book.author}</ThemeText>
        <Specer />
        <ThemeText title={true}>{book.description}</ThemeText>
      </ThemeCard>
      <ThemeButton onPress={handleDelete} style={styles.delete}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Delete book</Text>
      </ThemeButton>
    </ThemeView>
  );
};
export default BookDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
})
