import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <Image src={'/vercel.svg'} alt="Vercel Logo" width={150} height={150} className="animate-pulse" />
    </div>
  );
}
