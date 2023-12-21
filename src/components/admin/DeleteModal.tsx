'use client';
import React from 'react';
import Button from '../Button';
import deleteProduct from '@/lib/deleteProduct';
import { useRouter } from 'next/navigation';
export default function DeleteModal({ product }: { product: Product }) {
  const router = useRouter();

  async function handleDeleteButton(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      await deleteProduct(product.slug);
      router.push('/admin');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  async function handleCancelButton(e: React.MouseEvent<HTMLButtonElement>) {
    router.push('/admin');
  }

  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-violet-400 bg-opacity-25">
      <div className="bg-black py-4 px-6 rounded-xl max-w-md w-full">
        <h2 className="text-2xl pb-4 text-center">Estás seguro que querés eliminar el producto {product.title}?</h2>
        <div className="flex justify-evenly">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold p-4 my-2 rounded-full border border-solid border-slate-900 text-xl"
            onClick={handleDeleteButton}
          >
            Eliminar
          </button>
          <Button className="text-xl p-4" onClick={handleCancelButton}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}
