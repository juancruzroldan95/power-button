'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from '@/firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    logged: false,
    email: '',
    uid: '',
  });

  async function registerUser(values: AuthValues) {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
  }

  async function loginUser(values: AuthValues) {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  }

  async function logOut() {
    await signOut(auth);
  }

  async function googleLogIn() {
    await signInWithPopup(auth, provider);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user && user.email) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: undefined,
          uid: undefined,
        });
      }
    });
  }, []);

  return <AuthContext.Provider value={{ user, registerUser, loginUser, logOut, googleLogIn }}>{children}</AuthContext.Provider>;
};
