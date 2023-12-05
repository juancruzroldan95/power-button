'use client';
import React from 'react';

type AddToCartButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button
      className="bg-violet-950 hover:bg-violet-400 active:bg-violet-500 text-white font-bold p-2 px-16 my-4 w-full rounded-full border border-solid border-slate-900"
      onClick={onClick}
    >
      Agregar al carrito
    </button>
  );
}
