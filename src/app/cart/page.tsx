import React from 'react';
import CartItemContainer from './components/CartItemContainer';
import OrderSummary from './components/OrderSummary';

export default function CartPage() {
  return (
    <main className="container m-auto">
      <h2 className="text-5xl px-6 text-center font-bold uppercase my-10 border-b pb-4 md:text-7xl md:text-left">Tu carrito</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mx-8">
          <CartItemContainer />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}
