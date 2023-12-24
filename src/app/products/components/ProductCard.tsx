import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="basis-72 shadow-lg rounded">
      <Link href={`/products/detail/${product.slug}`} className="flex flex-col">
        <Image alt={product.title} src={product.image} width={288} height={288} style={{ objectFit: 'contain' }} />

        <div className="px-4 my-4">
          <h4 className="flex justify-center text-md font-bold">{product.title}</h4>
          <p className="flex justify-center text-md">u$s {product.price}</p>
        </div>
      </Link>
    </article>
  );
}
