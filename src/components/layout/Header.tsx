"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogInLink from '../auth/LogInLink';
import CartQty from './CartQty';
import { MdOutlineShoppingCart } from 'react-icons/md';
import HamburgerBtn from './HamburgerBtn';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toggleBtn, setToggleBtn] = useState('')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!toggleBtn)
      setToggleBtn('toggle-btn');
    else setToggleBtn('')
  };

  return (
    <header className="w-full bg-violet-950 sticky top-0 z-40">
      <section className="xl:max-w-7xl m-auto p-6 flex justify-between items-center">
        <Link href="/" className="flex justify-between items-center gap-4">
          <Image src="/power-button-logo.png" alt="Power-Button Logo" height={50} width={50} />
          <h1 className="uppercase font-bold text-lg">Power-Button</h1>
        </Link>
        <HamburgerBtn onClick={toggleMobileMenu} toggleBtn={toggleBtn} />
        <nav className="hidden md:block text-xl" aria-label="main">
          <div className="space-x-8 flex">
            <Link href="/products/all" className="hover:text-violet-400 transition-colors">
              Catálogo
            </Link>
            <Link href="/on-sale" className="hover:text-violet-400 transition-colors">
              Ofertas
            </Link>
            <Link href="/contact-us" className="hover:text-violet-400 transition-colors">
              Contacto
            </Link>
            <LogInLink />
            <Link href="/cart" className="hover:text-violet-400 transition-colors">
              <div className="flex items-center">
                <MdOutlineShoppingCart /> (<CartQty />)
              </div>
            </Link>
          </div>
        </nav>
      </section>
      {isMobileMenuOpen && <MobileMenu onClick={toggleMobileMenu} />}
    </header>
  );
}
