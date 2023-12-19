'use client';
import React from 'react';
import { useAuthContext } from '@/components/context/AuthContext';

export default function AdminLayout({ children, login }: { children: React.ReactNode; login: React.ReactNode }) {
  const { user } = useAuthContext() as AuthContextType;

  return <>{user.logged ? children : login}</>;
}
