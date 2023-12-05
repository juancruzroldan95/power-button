import React from 'react';
import CategoriesMenu from '@/components/CategoriesMenu';
import ProductList from '@/components/ProductList';

type ProductProps = {
  params: {
    category: CategoryName;
  };
};

export function generateStaticParams() {
  return [{ category: 'all' }, { category: 'consoles' }, { category: 'accessories' }, { category: 'games' }];
}

export const revalidate = 3600;
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
