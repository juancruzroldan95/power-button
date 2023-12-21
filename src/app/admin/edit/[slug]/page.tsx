import React from 'react';
import type { Metadata } from 'next';
import EditForm from '@/components/admin/EditForm';
import getProduct from '@/lib/getProduct';

export default async function EditProductPage({ params }: { params: { slug: string } }) {
  const productData: Promise<Product> = getProduct(params.slug);
  const product = await productData;

  return (
    <div className="container m-auto my-8">
      <div className="p-4 my-6 flex justify-between items-center">
        <h2 className="text-2xl">Editar producto</h2>
      </div>
      <hr className="p-4" />
      <EditForm product={product} />
    </div>
  );
}
