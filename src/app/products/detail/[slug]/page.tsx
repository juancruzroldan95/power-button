import React from 'react';
import getProduct from '@/lib/products/getProduct';
import Image from 'next/image';
import type { Metadata } from 'next';
import QuantitySelector from '@/components/common/QuantitySelector';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const productData: Promise<Product> = getProduct(params.slug);
  const product: Product = await productData;

  return {
    title: `${product.title} | Power-Button`,
    description: `This is the page of ${product.title}`,
  };
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const productData: Promise<Product> = getProduct(params.slug);
  const product = await productData;

  return (
    <div className="max-w-4xl m-auto">
      <section className="flex flex-col justify-center md:flex-row text-left gap-6 py-16">
        <div className="relative basis-1/2">
          <Image alt={product.title} src={product.image} width={860} height={860} className='rounded-lg' />
        </div>
        <div className="basis-1/2">
          <h2 className="text-4xl text-center md:text-left font-bold border-b border-gray-200 mb-4">{product.title}</h2>
          <p className="text-2xl mx-2">u$s {product.price}</p>
          <QuantitySelector product={product} />
          <p className="text-white">{product?.description}</p>
        </div>
      </section>
    </div>
  );
}
