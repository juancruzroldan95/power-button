'use client';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import Button from '../Button';
import { useRouter } from 'next/navigation';

export default function LogOutButton() {
  const router = useRouter();
  const { logOut } = useAuthContext() as AuthContextType;

  async function handleLogOutButton() {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  }

  return (
    <div>
      <Button className="p-3" onClick={handleLogOutButton}>
        Cerrar sesión
      </Button>
    </div>
  );
}
