import { Account, Avatars, Client, Databases,ID } from "react-native-appwrite";


export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") 
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? "")
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ?? "");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
export { ID };