import React from 'react';

type ButtonProps = {
  children: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, className = '', ...args }: ButtonProps) {
  return (
    <button
      className={`bg-violet-950 hover:bg-violet-400 active:bg-violet-500 text-white font-bold p-2 my-2 rounded-full border border-solid border-slate-900 ${className}`}
      {...args}
    >
      {children}
    </button>
  );
}
