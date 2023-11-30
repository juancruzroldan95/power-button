import React from 'react';
import ProductCard from './ProductCard';
import getAllProducts from '@/lib/getAllProducts';

type ProductProps = {
  category: CategoryName;
};

export default async function ProductList({ category }: ProductProps) {
  const productsData: Promise<Product[]> = getAllProducts();
  const products = await productsData;

  const items = category === 'all' ? products : products.filter((product) => product.category === category);
  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {items.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </section>
  );
}
