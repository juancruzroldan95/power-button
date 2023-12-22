import React from 'react';
import ProductCard from './ProductCard';
import getAllProducts from '@/lib/products/getAllProducts';

type ProductProps = {
  category: CategoryName;
};

export default async function ProductList({ category }: ProductProps) {
  const productsData: Promise<Product[]> = getAllProducts();
  const allProducts = await productsData;

  const products = category === 'all' ? allProducts : allProducts.filter((product) => product.category === category);
  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </section>
  );
}
