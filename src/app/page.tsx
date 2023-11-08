import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <div>Hello, HomePage!</div>
      <div className="display: grid-cols-4 gap-6">
        <Link href="/videogames">Go to Videogames</Link>
        <Link href="/consoles">Go to Consoles</Link>
        <Link href="/dashboard">Go to Dashboard</Link>
        <Link href="/about">Go to About</Link>
      </div>
    </main>
  );
}
