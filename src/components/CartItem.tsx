import React from 'react';
import Image from 'next/image';

type CartItemProps = {
  product: Product;
  key: string;
};

export default function CartItem({ product, key }: CartItemProps) {
  return (
    <div className="border-b border-gray-300 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-800">${product.price.toFixed(2)}</p>
        <p className="text-gray-600">Quantity: 1</p>
      </div>
    </div>
  );
}
