import React from 'react';
import CartItemContainer from './components/CartItemContainer';
import OrderSummary from './components/OrderSummary';

export default function CartPage() {
  return (
    <main className="container m-auto">
      <h2 className="text-7xl font-bold uppercase my-10 border-b pb-4">Tu carrito</h2>
      <div className="flex gap-10">
        <CartItemContainer />
        <OrderSummary />
      </div>
    </main>
  );
}
