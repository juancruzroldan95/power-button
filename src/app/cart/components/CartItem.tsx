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
    <li className="flex justify-between items-center md:flex-row border-b mb-8">
      <Image className="my-4 md:m-10" alt={item.title} src={item.image} width={100} height={100} style={{ objectFit: 'contain' }} />
      <div className='flex flex-col md:flex-row md:items-center md:gap-20'>
        <h4 className="font-bold md:ml-10">{item.title}</h4>
        <p className="">${item.price}</p>
        <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
      </div>
      <button className="md:ml-10" onClick={() => removeFromCart(item.slug)}>
        <RxCross2 />
      </button>
    </li>
  );
}
