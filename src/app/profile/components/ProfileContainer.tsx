'use client';
import React from 'react';
import { useAuthContext } from '@/components/context/AuthContext';
import AdminProfile from './AdminProfile';
import RegularUserProfile from './RegularUserProfile';

export default function ProfileContainer({ allOrders }: { allOrders: Order[] }) {
  const { user } = useAuthContext() as AuthContextType;
  return user.role === 'admin' ? <AdminProfile allOrders={allOrders} /> : <RegularUserProfile user={user} allOrders={allOrders} />;
}
