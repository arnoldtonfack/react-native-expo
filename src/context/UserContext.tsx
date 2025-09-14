import { account } from "@/lib/appWrite";
import { createContext, ReactNode, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";

interface User {
  $id: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  authChecked: boolean;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
   const [authChecked, setAuthChecked] = useState(false)

  async function login(email: string, password: string) {
    try {
        await account.createEmailPasswordSession(email, password)
        const user = await account.get();
        setUser(user);
        
    } catch (error: any) {
       throw new Error(error.message); 

        
    }
  }
  async function register(email: string, password: string) {

    try {
        await account.create(ID.unique(), email, password);
        await login(email, password);
    } catch (error: any) {
        throw new Error(error.message); 
        
    }
  }
  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

    async function getInitialUserValue() {
    try {
      const res = await account.get()
      setUser(res)
    } catch (error: any) {
      setUser(null)
    } finally {
      setAuthChecked(true)
    }
  }

  useEffect(() => {
    getInitialUserValue()
  }, [])
  return (
    <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
      {children}
    </UserContext.Provider>
  );
};
