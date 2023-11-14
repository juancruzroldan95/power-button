'use client';
import React from 'react';

export default function AddToCartButton() {
  return (
    <button
      className="bg-violet-950 hover:bg-violet-400 active:bg-violet-500 text-white font-bold p-2 px-16 my-4 w-full rounded-full border border-solid border-slate-900"
      onClick={() => alert('Emulando agregar item al carrito')}
    >
      Agregar al carrito
    </button>
  );
}
