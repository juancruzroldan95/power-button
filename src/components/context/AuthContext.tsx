'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, provider } from '@/firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import createNewUser from '@/lib/users/createNewUser';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserAuth>({
    uid: '',
    email: '',
    role: '',
    logged: false,
  });

  async function registerUser(values: AuthValues) {
    try {
      const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const body: User = {
        uid: res.user.uid as string,
        email: res.user.email as string,
        role: 'user',
      };
      console.log('Body:', body);
      const userCreated = await createNewUser(body);
      console.log('User created:', userCreated);
    } catch (error) {
      console.log('Register error', error);
    }
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
    onAuthStateChanged(auth, async (user) => {
      console.log(user);

      if (user && user.email) {
        const docRef = doc(db, 'users', user.email);
        const userDoc = await getDoc(docRef);
        setUser({
          uid: user.uid,
          email: user.email,
          logged: true,
          role: userDoc.data()?.role,
        });
      } else {
        setUser({
          uid: '',
          email: '',
          role: '',
          logged: false,
        });
      }
    });
  }, []);

  return <AuthContext.Provider value={{ user, registerUser, loginUser, logOut, googleLogIn }}>{children}</AuthContext.Provider>;
};
