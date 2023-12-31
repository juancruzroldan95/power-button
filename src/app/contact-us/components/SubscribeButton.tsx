'use client';
import React from 'react';

export default function SubscribeButton({ text }: { text: string }) {
  return (
    <button
      className="bg-violet-950 hover:bg-violet-400 active:bg-violet-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900"
      onClick={() => alert('Emulando submit form')}
    >
      {text}
    </button>
  );
}
