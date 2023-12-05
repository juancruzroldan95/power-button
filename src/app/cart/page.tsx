'use client';
import React from 'react';
import { useCartContext } from '@/components/context/CartContext';
import CardItem from '@/components/CartItem';

export default function CartPage() {
  const { cart } = useCartContext();

  return (
    <main className="container m-auto">
      <h2 className="text-2xl my-10 border-b pb-4">Tu carrito</h2>

      <ul>
        {cart.map((product) => (
          <CartItem product={product} key={product.slug} />
        ))}
      </ul>
    </main>
  );
}
