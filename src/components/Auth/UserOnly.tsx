import { useUser } from '@/hooks/userUser';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import ThemedLoader from '../ThemedLoader';

interface UserOnlyProps {
    children: React.ReactNode;
    
}

const UserOnly: React.FC<UserOnlyProps> = ({ children }) => {
    const {user,authChecked} = useUser();
    const route = useRouter();

    useEffect(() => {
        if (authChecked && user === null){
            route.replace('/login');
        }
    }, [authChecked, user]);
     if (!authChecked || !user) {
    return (
      <ThemedLoader />
    )
  }

  return children
}

export default UserOnly

