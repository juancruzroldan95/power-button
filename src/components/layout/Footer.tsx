import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-violet-950 border-t mt-auto py-4 text-violet-400 flex justify-around items-center">
      <p>Desarrollado por Juan Cruz Roldan</p>
      <div className="flex gap-2">
        <p>Powered by</p>
        <Image src="/next.svg" alt="Next Logo" width={50} height={50} />
      </div>
    </footer>
  );
}
