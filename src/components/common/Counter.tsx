'use client';
import React from 'react';
import Button from '../Button';

type CounterProps = {
  max: number;
  counter: number;
  setCounter: (number: number) => void;
};

export default function Counter({ max, counter, setCounter }: CounterProps) {
  const increase = () => {
    if (counter < max) setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <div className="flex gap-3">
      <Button onClick={decrease}> - </Button>
      <p className="flex flex-col justify-center items-center">Unidades: {counter}</p>
      <Button onClick={increase}> + </Button>
    </div>
  );
}
