'use client';
import React from 'react';
import { useState } from 'react';
import Button from '../Button';

type CounterProps = {
  max: number;
  counter: number;
  setCounter: (number: number) => void;
};

export default function Counter({ max, counter, setCounter }: CounterProps) {
  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex gap-3">
      <Button onClick={decrease}> - </Button>
      <p className="flex justify-center items-center">{counter}</p>
      <Button onClick={increase}> + </Button>
    </div>
  );
}
