import type { Models } from 'react-native-appwrite';

export interface Book extends Models.Document {
  title: string;
  author: string;
  // add tes champs (description, coverUrl, etc.)
}

export type CreateBookDto = Pick<Book, 'title' | 'author'> & {
  // autres champs requis à la création
};

export type UpdateBookDto = Partial<CreateBookDto>;