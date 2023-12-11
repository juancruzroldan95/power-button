'use client';
import React from 'react';
import { useCartContext } from '@/components/context/CartContext';
import Button from '@/components/Button';

export default function OrderSummary() {
  const { totalAmount } = useCartContext();
  return (
    <aside className="flex flex-col gap-3">
      <h2>Order summary</h2>
      <h3>Total: ${totalAmount()}</h3>
      <Button onClick={() => alert('Simulando entrar al flujo de checkout')}>Checkout</Button>
    </aside>
  );
}
