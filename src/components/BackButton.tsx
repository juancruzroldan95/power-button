'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './Button';

export default function BackButton() {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  return (
    <Button className="w-full mt-8" onClick={handleBackButton}>
      Volver
    </Button>
  );
}
