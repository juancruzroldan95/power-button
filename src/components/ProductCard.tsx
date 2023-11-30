import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProductCardProps = {
  item: Product;
};

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <article className="basis-72 shadow-lg rounded">
      <Link href={`/products/detail/${item.slug}`} className="flex flex-col">
        <Image alt={item.title} src={item.image} width={288} height={288} style={{ objectFit: 'contain' }} />

        <div className="px-4 my-4">
          <h4 className="flex justify-center text-md font-bold">{item.title}</h4>
          <p className="flex justify-center text-md">u$s {item.price}</p>
        </div>
      </Link>
    </article>
  );
}
