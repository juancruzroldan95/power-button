'use client';
import React from 'react';
import { useAuthContext } from '@/components/context/AuthContext';
import { useRouter } from 'next/navigation';
import NotFound from '../not-found';

export default function AdminLayout({ children, login }: { children: React.ReactNode; login: React.ReactNode }) {
  const { user } = useAuthContext() as AuthContextType;
  const route = useRouter();

  return <>{user.role === 'admin' ? children : <NotFound />}</>;
}
