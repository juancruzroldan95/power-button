import React from 'react';
import CreateForm from '@/app/admin/components/CreateForm';

export default function CreatePage() {
  return (
    <div className="container m-auto my-8">
      <div className="p-4 my-6 flex justify-between items-center">
        <h2 className="text-2xl">Crear nuevo producto</h2>
      </div>
      <hr className="p-4" />
      <CreateForm />
    </div>
  );
}
