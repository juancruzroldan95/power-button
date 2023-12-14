import React from 'react';
import ProductsTable from '@/components/admin/ProductsTable';
import Button from '@/components/Button';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="container m-auto mt-6">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-2xl">Panel Administración</h2>
        <Link href="/admin/create">
          <Button className="p-3 text-lg">Crear nuevo producto</Button>
        </Link>
      </div>
      <hr className="p-4" />
      <ProductsTable />
    </div>
  );
}
