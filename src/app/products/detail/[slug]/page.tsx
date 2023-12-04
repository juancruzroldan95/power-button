import React from 'react';
import getProduct from '@/lib/getProduct';
import Image from 'next/image';
import AddToCartButton from '@/components/AddToCartButton';
import BackButton from '@/components/BackButton';
import type { Metadata } from 'next';
// import QuantitySelector from "./QuantitySelector"
// import GoBack from "./GoBack"

type ProductDetailProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: ProductDetailProps): Promise<Metadata> {
  const productData: Promise<Product> = getProduct(slug);
  const product: Product = await productData;

  return {
    title: product.title,
    description: `This is the page of ${product.title}`,
  };
}

export default async function ProductDetail({ params: { slug } }: ProductDetailProps) {
  const productData: Promise<Product> = getProduct(slug);
  const product = await productData;

  return (
    <div className="max-w-4xl m-auto">
      <BackButton />
      <section className="flex gap-6 py-16">
        <div className="relative basis-1/2">
          <Image alt={product.title} src={product.image} width={860} height={860} />
        </div>
        <div className="basis-1/2">
          <h2 className="text-4xl font-bold border-b border-gray-200 mb-4">{product.title}</h2>
          <p className="text-xl">u$s {product.price}</p>
          <AddToCartButton />
          <p className="text-white">{product?.description}</p>
        </div>
      </section>
    </div>
  );
}
