'use client';
import React from 'react';
import { useState } from 'react';
import Button from './Button';

export default function Counter() {
  const [counter, setCounter] = useState<number>(1);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex justify-center items-center ggap-3">
      <Button onClick={decrease}> - </Button>
      <p>{counter}</p>
      <Button onClick={increase}> + </Button>
    </div>
  );
}
