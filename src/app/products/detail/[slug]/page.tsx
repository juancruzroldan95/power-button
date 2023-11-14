import React from 'react';
import { mockData } from '@/data/products';
import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';
import BackButton from '@/components/BackButton';
// import QuantitySelector from "./QuantitySelector"
// import GoBack from "./GoBack"

type ProductDetailProps = {
  params: {
    slug: string;
  };
};
export default function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = params;
  const item = mockData.find((item) => item.slug === slug);

  return (
    <div className="max-w-4xl m-auto">
      <BackButton />
      <section className="flex gap-6 py-16">
        <div className="relative basis-1/2">
          <Image alt={item.title} src={item.image} width={860} height={860} />
        </div>
        <div className="basis-1/2">
          <h2 className="text-4xl font-bold border-b border-gray-200 mb-4">{item.title}</h2>
          <p className="text-xl">u$s {item.price}</p>
          <AddToCartButton />
          <p className="text-white">{item?.description}</p>
        </div>
      </section>
    </div>
  );
}
