'use client';
import React from 'react';
import { useState } from 'react';
import Counter from '@/components/common/Counter';
import AddToCartButton from '../AddToCartButton';

import { useCartContext } from '../context/CartContext';

type QuantitySelectorProps = {
  product: Product;
};

export default function QuantitySelector({ product }: QuantitySelectorProps) {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const handleAddButton = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      <Counter max={product.stock} counter={quantity} setCounter={setQuantity} />
      <AddToCartButton onClick={handleAddButton} />
    </div>
  );
}