import React from 'react';
import { mockData } from '@/data/products';
import ProductCard from './ProductCard';

// export type CategoryName = 'consoles' | 'accessories' | 'games' | 'all';

type ProductProps = {
  category: string;
};

export default function ProductList({ category }: ProductProps) {
  const items = category === 'all' ? mockData : mockData.filter((item) => item.category === category);
  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {items.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </section>
  );
}
