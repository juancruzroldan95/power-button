'use client';
import React from 'react';
import { useCartContext } from '@/components/context/CartContext';
import { useAuthContext } from '@/components/context/AuthContext';
import Button from '@/components/Button';
import { toast } from 'react-toastify';
import createNewOrder from '@/lib/orders/createNewOrder';

export default function OrderSummary() {
  const { cart, totalAmount } = useCartContext();
  const { user } = useAuthContext() as AuthContextType;

  async function handleCheckout() {
    if (user.email) {
      try {
        const transformCart = (cart: Item[]) => {
          return cart.map(({ title, price, quantity }) => ({
            title,
            price,
            quantity,
          }));
        };
        const transformedCart = transformCart(cart);
        const values: Order = {
          orderId: '',
          email: user.email,
          items: transformedCart as Item[],
          totalAmount: totalAmount(),
          date: new Date().toISOString(),
        };
        const res = await createNewOrder(values);
        console.log('Order creada: ', res);
        toast.success('Orden generada! El admin se contactará con vos para coordinar el pago y la entrega!', {
          position: 'top-right',
          autoClose: 30000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      } catch (error) {
        console.log('Error al crear order:', error);
      }
    } else {
      toast.warn('Debes iniciar sesión para terminar la compra', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  }

  return (
    <div>
      {totalAmount() !== 0 ? (
        <div>
          <aside className="flex flex-col gap-3 px-16 py-8">
            <h2 className="text-xl border-b">Resúmen de compra</h2>
            <h3>Total: ${totalAmount()}</h3>
            <Button onClick={handleCheckout}>Generar orden de compra</Button>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
