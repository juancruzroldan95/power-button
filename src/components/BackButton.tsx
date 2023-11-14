'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="bg-violet-950 hover:bg-violet-400 active:bg-violet-500 text-white p-4 w-3xl rounded-xl border border-solid border-slate-900"
      onClick={() => router.back()}
    >
      Volver
    </button>
  );
}
