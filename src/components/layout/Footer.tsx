import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="w-full mt-auto bg-violet-950 border-t text-violet-400">
      <section className='xl:max-w-7xl m-auto px-6 py-4 text-center md:flex justify-between items-center'>
        <p>Made with 🤎 by <Link href="https://github.com/juancruzroldan95" className='underline font-bold'>Juan Cruz Roldan</Link>.</p>
        <div className="hidden md:flex gap-2">
          <p>Powered by</p>
          <Image src="/next.svg" alt="Next Logo" width={50} height={50} />
        </div>
      </section>
    </footer>
  );
}
