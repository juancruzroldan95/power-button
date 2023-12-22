'use client';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import Button from '../Button';

export default function LogOutButton() {
  const { logOut } = useAuthContext() as AuthContextType;

  return <Button onClick={logOut}>Cerrar sesión</Button>;
}
