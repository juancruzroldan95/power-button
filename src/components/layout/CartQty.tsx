'use client';
import React from 'react';
import { useCartContext } from '../context/CartContext';

export default function CartQty() {
  const { totalQty } = useCartContext();

  return <>{totalQty()}</>;
}
