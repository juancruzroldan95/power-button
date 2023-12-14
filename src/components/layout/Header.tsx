import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartQty from '../CartQty';

export default function Header() {
  return (
    <header className="w-full bg-violet-950">
      <section className="xl:max-w-7xl m-auto p-6 flex justify-between items-center">
        <Link href="/" className="flex justify-between items-center gap-4">
          <Image src="/power-button-logo.png" alt="Power-Button Logo" height={50} width={50} />
          <h1 className="uppercase font-bold text-lg">Power-Button</h1>
        </Link>
        <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer">
          &#9776;
        </button>
        <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
          <Link href="/products/all" className="hover:text-violet-400 transition-colors">
            Catálogo
          </Link>
          <Link href="/on-sale" className="hover:text-violet-400 transition-colors">
            Ofertas
          </Link>
          <Link href="/contact-us" className="hover:text-violet-400 transition-colors">
            Contacto
          </Link>
          <Link href="/login" className="hover:text-violet-400 transition-colors">
            Log In
          </Link>
          <Link href="/cart" className="hover:text-violet-400 transition-colors">
            Carrito (<CartQty />)
          </Link>
        </nav>
      </section>
      {/*
      ///// Not Implemented Yet /////
      <section
        id="mobile-menu"
        className="absolute top-0 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden"
      >
        <button className="text-8xl self-end px-6">&times;</button>
        <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
          <Link href="/products" className="w-full text-center py-6 hover:opacity-90">
            Products
          </Link>
          <Link href="/on-sale" className="w-full text-center py-6 hover:opacity-90">
            On Sale
          </Link>
          <Link href="/contact" className="w-full text-center py-6 hover:opacity-90">
            Contact
          </Link>
        </nav>
      </section>
      ///// Not Implemented Yet /////
      */}
    </header>
  );
}
