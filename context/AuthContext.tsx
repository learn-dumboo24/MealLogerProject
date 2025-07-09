import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onAuthStateChangedListener } from '../utils/firebaseAuth';
import { User } from 'firebase/auth';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  interface UserType {
    uid: string;
    email: string | null;
  }
  
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (firebaseUser: User | null) => {
      if (firebaseUser) {
        const simplifiedUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        };
        await AsyncStorage.setItem('user', JSON.stringify(simplifiedUser));
        setUser(simplifiedUser);
      } else {
        await AsyncStorage.removeItem('user');
        setUser(null);
      }
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
