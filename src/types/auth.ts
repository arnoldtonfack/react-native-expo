import type { Models } from 'react-native-appwrite';

export type AWUser = Models.User;
export type AWSession = Models.Session;

export type RegisterDto = {
  email: string;
  password: string;
  name: string;
};

export type LoginDto = {
  email: string;
  password: string;
};
