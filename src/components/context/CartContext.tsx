'use client';
import { createContext, useContext, useState } from 'react';

export const CartContext = createContext<CartContextType | null>(null);

export function useCartContext() {
  return useContext(CartContext) as CartContextType;
}

export default function CartProvider({ children }: any) {
  const [cart, setCart] = useState<Item[]>([]);

  function addToCart(item: Item) {
    setCart([...cart, item]);
  }

  function isInCart(slug: string) {
    return cart.some((item) => item.slug === slug);
  }

  function totalQty() {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  function totalAmount() {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  function emptyCart() {
    setCart([]);
  }

  return <CartContext.Provider value={{ cart, addToCart, isInCart, totalQty, totalAmount, emptyCart }}>{children}</CartContext.Provider>;
}
