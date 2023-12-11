import React from 'react';
import Image from 'next/image';

type CartItemProps = {
  item: Item;
  key: string;
};
export default function CartItem({ item, key }: CartItemProps) {
  return (
    <li className="flex justify-center items-center">
      <Image className="m-10" alt={item.title} src={item.image} width={100} height={100} style={{ objectFit: 'contain' }} />
      <h4 className="mx-10">{item.title}</h4>
      <p className="mx-10">${item.price}</p>
      <p className="mx-10">Unidades: {item.quantity}</p>
    </li>
  );
}
