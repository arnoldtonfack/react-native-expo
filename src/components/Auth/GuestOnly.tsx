import { useUser } from '@/hooks/userUser';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import ThemedLoader from '../ThemedLoader';

interface UserOnlyProps {
    children: React.ReactNode;
    
}

const GuestOnly: React.FC<UserOnlyProps> = ({ children }) => {
    const {user,authChecked} = useUser();
    const route = useRouter();

    useEffect(() => {
        if (authChecked && user !== null){
            route.replace('/profile');
        }
    }, [authChecked, user]);
     if (!authChecked || user) {
    return (
      <ThemedLoader />
    )
  }

  return children
}

export default GuestOnly

