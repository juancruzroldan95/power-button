'use client';
import React from 'react';
import Image from 'next/image';

export default function AdminProfile({ allOrders }: { allOrders: Order[] }) {
  const totalIncome = () => {
    return allOrders.reduce((total, order) => total + order.totalAmount, 0);
  };
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('es-ES', options);
    return formattedDate;
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">💸 Igresos: ${totalIncome()}</h2>
      <h2 className="text-2xl font-bold mb-4">📈 Mis ventas:</h2>
      <ul className="container">
        {allOrders?.map((order) => (
          <li key={order.orderId} className="m-6 p-4 bg-zinc-900 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">ID de la compra: {order.orderId}</h3>
            <p className="mb-2">
              <strong>Comprador:</strong> {order.email}
            </p>
            <p className="mb-2">
              <strong>Fecha de compra:</strong> {formatDate(order.date || '')}
            </p>
            <p className="mb-2">
              <strong>Monto total:</strong> ${order.totalAmount}
            </p>
            <h4 className="text-lg font-semibold mb-2">Items:</h4>
            <ul className="container flex">
              {order.items?.map((item) => (
                <li key={item.slug} className="flex items-center m-4 pr-4 bg-violet-950 rounded-lg">
                  <Image src={item.image} alt={item.title} width={100} height={100} className="object-cover mr-4 rounded-l-lg" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
