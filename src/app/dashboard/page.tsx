import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1>Hello, Dashboard page! 📈</h1>
      <Link href="/">Back to Homepage</Link>
    </div>
  );
}
