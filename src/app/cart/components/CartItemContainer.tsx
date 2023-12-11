'use client';
import React from 'react';
import { useCartContext } from '@/components/context/CartContext';
import CartItem from './CartItem';

export default function CartItemContainer() {
  const { cart } = useCartContext();
  return (
    <>
      {' '}
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.slug} />
        ))}
      </ul>
    </>
  );
}
