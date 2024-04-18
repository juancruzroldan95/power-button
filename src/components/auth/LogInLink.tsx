'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegUserCircle } from 'react-icons/fa';
import { useAuthContext } from '../context/AuthContext';

export default function LogInLink({ className = '' }) {
  const { user } = useAuthContext() as AuthContextType;

  return (
    <div>
      {user.logged ? (
        <Link href="/profile" className="hover:text-violet-400 transition-colors">
          <div className={`flex items-center ${className}`}>Mi perfil</div>
        </Link>
      ) : (
        <Link href="/login" className="hover:text-violet-400 transition-colors">
          <div className={`flex items-center ${className}`}>
            <div className="pr-2">
              <FaRegUserCircle />
            </div>
            Log In
          </div>
        </Link>
      )}
    </div>
  );
}
