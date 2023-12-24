import React from 'react';
import Link from 'next/link';
import SubscribeButton from '@/app/contact-us/components/SubscribeButton';

export default function ContactUs() {
  return (
    <section id="newsletter" className="p-6 my-12 text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-white">Atención al cliente</h2>
      <p className="max-w-lg text-xl mt-4 text-center">Dejanos tu email y nos contactaremos con vos a la brevedad para brindarte soporte.</p>
      <form action="" className="text-xl gap-4">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Tu email"
          className="w-full my-4 text-black text-xl p-1 rounded-xl border border-solid"
        ></input>
        <SubscribeButton text="Enviar" />
      </form>
    </section>
  );
}
