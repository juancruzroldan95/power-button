"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import LogInLink from '../auth/LogInLink';

export default function MobileMenu({ onClick }: { onClick: () => void }) {
  return (
    <section
      id="mobile-menu"
      className="absolute top-[99px] z-10 bg-black w-full text-5xl flex flex-col justify-content-center origin-top animate-open-menu"
    >
      <nav onClick={onClick} className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
        <Link href="/" className="w-full text-center py-6 text-white hover:opacity-90">
          Inicio
        </Link>
        <Link href="/products/all" className="w-full text-center py-6 text-white hover:opacity-90">
          Catálogo
        </Link>
        <Link href="/on-sale" className="w-full text-center py-6 text-white hover:opacity-90">
          Ofertas
        </Link>
        <Link href="/contact-us" className="w-full text-center py-6 text-white hover:opacity-90">
          Contacto
        </Link>
        <LogInLink className='py-6' />
      </nav>
    </section>
  );
}
