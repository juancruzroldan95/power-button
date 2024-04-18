'use client';
import React from 'react';
import Button from '../../../components/Button';

type AddToCartButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <Button className="md:w-full p-2" onClick={onClick}>
      Agregar al carrito
    </Button>
  );
}
