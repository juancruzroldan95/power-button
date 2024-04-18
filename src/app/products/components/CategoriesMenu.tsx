'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const links = [
  { label: 'Todos', href: '/products/all' },
  { label: 'Juegos', href: '/products/games' },
  { label: 'Consolas', href: '/products/consoles' },
  { label: 'Accesorios', href: '/products/accessories' },
];

export default function CategoriesMenu() {
  const pathname = usePathname();
  return (
    <aside className="flex justify-around align-center md:flex-col md:justify-normal gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${pathname === link.href ? 'font-semibold border-b' : ''} py-2`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
}
