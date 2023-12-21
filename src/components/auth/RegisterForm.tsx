'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button';
import { useAuthContext } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const router = useRouter();

  const { registerUser, googleLogIn } = useAuthContext() as AuthContextType;
  const [values, setValues] = useState<AuthValues>({
    email: '',
    password: '',
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await registerUser(values);
      toast.success('Cuenta creada!', {
        position: 'top-right',
        autoClose: 3000, // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      router.push('/');
    } catch (error) {
      console.log('Register error:', error);
      toast.error('Email ya registrado', {
        position: 'top-right',
        autoClose: 3000, // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  }

  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-violet-400 bg-opacity-25">
      <form onSubmit={handleFormSubmit} className="bg-black py-4 px-6 rounded-xl max-w-md w-full">
        <h2 className="text-2xl pb-4 text-center">Creá una cuenta nueva</h2>
        <div className="flex justify-center">
          <button
            onClick={googleLogIn}
            className="bg-white text-black mb-4 py-2 px-4 rounded-full shadow-md flex items-center cursor-pointer hover:bg-gray-100"
          >
            <FcGoogle /> Sign Up with Google
          </button>
        </div>
        <div className="flex justify-center">Ó</div>
        <label className="font-bold">Email</label>
        <input
          type="email"
          value={values.email}
          required
          className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8"
          name="email"
          onChange={handleInputChange}
        />
        <label className="font-bold">Password</label>
        <input
          type="password"
          value={values.password}
          required
          className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8"
          name="password"
          onChange={handleInputChange}
        />
        <div className="flex justify-between items-center">
          <Button type="submit" className="px-8" onChange={() => registerUser(values)}>
            Sign Up
          </Button>
          <div>
            Ya tenés una cuenta?{' '}
            <Link href="/login" className="text-violet-400 underline hover:text-white">
              Iniciá sesión
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
