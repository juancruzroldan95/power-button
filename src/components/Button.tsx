import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
}

export default function Button({ children, className = '', ...args }: ButtonProps) {
  return (
    <button
      className={`bg-violet-950 hover:bg-violet-400 active:bg-violet-500 text-white font-bold px-2 my-2 rounded-full border border-solid border-slate-900 ${className}`}
      {...args}
    >
      {children}
    </button>
  );
}
