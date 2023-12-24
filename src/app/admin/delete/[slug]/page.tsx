import React from 'react';
import DeleteModal from '@/app/admin/components/DeleteModal';
import getProduct from '@/lib/products/getProduct';

export default async function DeleteProductPage({ params }: { params: { slug: string } }) {
  const productData: Promise<Product> = getProduct(params.slug);
  const product = await productData;
  return (
    <div>
      <DeleteModal product={product} />
    </div>
  );
}
