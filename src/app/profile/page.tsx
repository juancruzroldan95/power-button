import LogOutButton from '@/components/LogOutButton';
import React from 'react';

export default function ProfilePage() {
  return (
    <main className="container m-auto">
      <h2 className="text-7xl font-bold uppercase my-10 border-b pb-4">Mi perfil</h2>
      <div className="flex gap-10">
        <LogOutButton />
      </div>
    </main>
  );
}
