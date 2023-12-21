'use client';
import React from 'react';
import { useState } from 'react';
import Counter from '@/components/common/Counter';
import AddToCartButton from '../AddToCartButton';
import { useCartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

type QuantitySelectorProps = {
  product: Product;
};

export default function QuantitySelector({ product }: QuantitySelectorProps) {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddButton = () => {
    addToCart({
      ...product,
      quantity,
    });
    toast.success('Producto agregado al carrito!', {
      position: 'top-right',
      autoClose: 3000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div className="">
      <Counter max={product.stock} counter={quantity} setCounter={setQuantity} />
      <AddToCartButton onClick={handleAddButton} />
    </div>
  );
}
