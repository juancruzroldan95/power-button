'use client';
import React from 'react';
import { useCartContext } from '@/components/context/CartContext';
import CartItem from './CartItem';

export default function CartItemContainer() {
  const { cart } = useCartContext();

  return (
    <div>
      {cart.length !== 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.slug} />
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-center my-40">
            Agrega <span className="text-violet-400">productos</span> para verlos acá!
          </h2>
        </div>
      )}
    </div>
  );
}
