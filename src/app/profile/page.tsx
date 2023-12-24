import React from 'react';
import LogOutButton from '@/components/auth/LogOutButton';
import ProfileContainer from './components/ProfileContainer';
import getAllOrders from '@/lib/orders/getAllOrders';

export default async function ProfilePage() {
  const allOrders = (await getAllOrders()) as Order[];

  return (
    <main className="container m-auto">
      <div className="border-b">
        <div className="px-4 flex justify-between items-center">
          <h2 className="text-7xl font-bold uppercase my-10">Mi perfil</h2>
          <LogOutButton />
        </div>
      </div>
      <div className="flex gap-10">
        <ProfileContainer allOrders={allOrders} />
      </div>
    </main>
  );
}
