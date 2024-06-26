import React from 'react';
import BackButton from '@/components/BackButton';

export default function OnSale() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <section className="flex flex-col justify-center p-6 items-center gap-8 mb-12 relative">
        <h2 className="text-5xl md:text-9xl font-bold text-center">Sales</h2>
        <h2 className="text-5xl md:text-9xl font-bold text-center">
          coming soon<span className="text-violet-400">.</span>
        </h2>
        <p className="max-w-lg text-2xl mt-4 text-center text-slate-400">Put some text here.</p>
        <BackButton />
      </section>
    </main>
  );
}
