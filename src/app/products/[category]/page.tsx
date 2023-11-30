import React from 'react';
import CategoriesMenu from '@/components/CategoriesMenu';
import ProductList from '@/components/ProductList';

type ProductProps = {
  params: {
    category: CategoryName;
  };
};

export default function Products({ params }: ProductProps) {
  const { category } = params;

  return (
    <main className="container m-auto">
      <h2 className="text-7xl font-bold uppercase my-10 border-b pb-4">Productos</h2>
      <div className="flex gap-10">
        <CategoriesMenu />
        <ProductList category={category} />
      </div>
    </main>
  );
}
