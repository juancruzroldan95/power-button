'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Counter from '@/components/common/Counter';
import { useCartContext } from '@/components/context/CartContext';
import { RxCross2 } from 'react-icons/rx';

type CartItemProps = {
  item: Item;
  key: string;
};
export default function CartItem({ item, key }: CartItemProps) {
  const { updateItemQuantity, removeFromCart, emptyCart } = useCartContext();
  const [quantity, setQuantity] = useState<number>(item.quantity);

  useEffect(() => {
    updateItemQuantity(item.slug, quantity);
  }, [quantity]);

  return (
    <li className="flex justify-between items-center border-b mb-8">
      <Image className="m-10" alt={item.title} src={item.image} width={100} height={100} style={{ objectFit: 'contain' }} />
      <h4 className="mx-10 font-bold">{item.title}</h4>
      <p className="mx-10">${item.price}</p>
      <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
      <button className="pl-16" onClick={() => removeFromCart(item.slug)}>
        <RxCross2 />
      </button>
    </li>
  );
}
