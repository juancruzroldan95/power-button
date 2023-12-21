import React from 'react';
import DeleteModal from '@/components/admin/DeleteModal';
import getProduct from '@/lib/getProduct';

export default async function DeleteProductPage({ params }: { params: { slug: string } }) {
  const productData: Promise<Product> = getProduct(params.slug);
  const product = await productData;
  return (
    <div>
      <DeleteModal product={product} />
    </div>
  );
}
