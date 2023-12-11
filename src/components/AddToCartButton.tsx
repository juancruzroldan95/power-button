'use client';
import React from 'react';
import Button from './Button';

type AddToCartButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <Button className="w-full" onClick={onClick}>
      Agregar al carrito
    </Button>
  );
}
