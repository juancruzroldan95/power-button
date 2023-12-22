import React from 'react';
import CategoriesMenu from '@/components/CategoriesMenu';
import ProductList from '@/components/ProductList';
import { Suspense } from 'react';

type ProductsCategoryProps = {
  params: {
    category: CategoryName;
  };
};

// export function generateMetaData({ params }: ProductsCategoryProps) {
//   return {
//     title: `${params.category} | Power Button`,
//   };
// }

export function generateStaticParams() {
  return [{ category: 'all' }, { category: 'consoles' }, { category: 'accessories' }, { category: 'games' }];
}

export const revalidate = 3600;
export default function ProductsCategory({ params }: ProductsCategoryProps) {
  const { category } = params;

  return (
    <main className="container m-auto">
      <h2 className="text-7xl font-bold uppercase my-10 border-b pb-4">Productos</h2>
      <div className="flex gap-10">
        <CategoriesMenu />
        <Suspense fallback={<h2>🌀 Loading...</h2>}>
          <ProductList category={category} />
        </Suspense>
      </div>
    </main>
  );
}
