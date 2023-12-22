import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SubscribeButton from '@/components/SubscribeButton';

export default function HomePage() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <section id="hero" className="flex flex-col-reverse justify-center md:flex-row p-6 items-center gap-8 mb-12 relative">
        <article className="md:w-1/2">
          <h2 className="text-4xl font-bold text-center md:text-left">
            Convertite en un verdadero <span className="text-violet-400">Tryhard</span> con nuestras ofertas
          </h2>
          <p className="text-2xl mt-4 text-center md:text-left text-slate-400">
            ¡Potenciá tu setup gaming! Equipate con lo mejor para alcanzar la victoria. ¡No hay tiempo que perder, la competencia te espera!
          </p>
        </article>
        <div className="md:w-1/2">
          <Image alt="Hero Image" src="/hero-image3.jpg" width={900} height={900} />
        </div>
      </section>

      <hr className="mx-auto bg-white w-1/2"></hr>

      <section id="categories" className="p-6 my-12">
        <h2 className="text-4xl font-bold text-center md:text-left mb-6 text-white">Comprá por categoría</h2>
        <ul className="list-none mx-auto my-12 flex flex-col md:flex-row items-center gap-8">
          <li className="w-2/3 md:w-5/6 flex flex-col items-center">
            <Link href="/products/games">
              <div className="border border-solid border-slate-300 py-6 px-2 rounded-3xl shadow-xl">
                <Image alt="Games" src="/games.webp" height={500} width={500} />
              </div>
              <h3 className="text-3xl py-4 text-center">Juegos</h3>
            </Link>
          </li>
          <li className="w-2/3 md:w-5/6 flex flex-col items-center">
            <Link href="/products/consoles">
              <div className="border border-solid border-slate-300 py-6 px-2 rounded-3xl shadow-xl">
                <Image alt="Consoles" src="/consoles.webp" height={500} width={500} />
              </div>
              <h3 className="text-3xl py-4 text-center">Consolas</h3>
            </Link>
          </li>
          <li className="w-2/3 md:w-5/6 flex flex-col items-center">
            <Link href="/products/accessories">
              <div className="border border-solid border-slate-300 py-6 px-2 rounded-3xl shadow-xl">
                <Image alt="Accessories" src="/accessories.webp" height={500} width={500} />
              </div>
              <h3 className="text-3xl py-4 text-center">Accesorios</h3>
            </Link>
          </li>
        </ul>
      </section>

      <hr className="mx-auto bg-white w-1/2"></hr>

      <section id="newsletter" className="p-6 my-12 text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Newsletter</h2>
        <p className="max-w-lg text-xl mt-4 text-center">Registrate para recibir novedades de nuevos productos y ofertas especiales</p>
        <form action="" className="text-xl gap-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Tu email"
            className="w-full my-4 text-black text-xl p-1 rounded-xl border border-solid"
          ></input>
          <SubscribeButton text="Suscribite!" />
        </form>
      </section>
    </main>
  );
}
