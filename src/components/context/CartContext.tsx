'use client';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart([...cart, product]);
  }

  function isInCart(slug: string) {
    return cart.some((product) => product.slug === slug);
  }

  function totalQty() {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  function emptyCart() {
    setCart([]);
  }

  return <CartContext.Provider value={{ cart, addToCart, isInCart, totalQty, emptyCart }}>{children}</CartContext.Provider>;
}
