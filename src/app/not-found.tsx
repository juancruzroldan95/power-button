import React from 'react';
import Image from 'next/image';
import BackButton from '@/components/BackButton';

export default function NotFound() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 relative">
        <article className="sm:w-1/2">
          <h2 className="text-4xl font-bold text-center sm:text-left">Página no encontrada.</h2>
          <p className="max-w-lg text-2xl mt-4 text-center sm:text-left text-slate-400">
            Perdón, no pudimos encontrar la página que estás buscando. Si pensá que es un error, por favor contactanos.
          </p>
          <BackButton />
        </article>
        <div className="sm:w-1/2">
          <Image alt="Not Found" src="/404.png" width={900} height={900} />
        </div>
      </section>
    </main>
  );
}
