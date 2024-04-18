import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="shadow-lg">
      <Link href={`/products/detail/${product.slug}`} className="flex flex-col">
        <Image alt={product.title} src={product.image} width={288} height={288} className='rounded-t-xl object-contain' />
        <div className="bg-neutral-900 p-4 rounded-b-xl">
          <h4 className="flex justify-center text-md font-bold">{product.title}</h4>
          <p className="flex justify-center text-md">u$s {product.price}</p>
        </div>
      </Link>
    </div>
  );
}
