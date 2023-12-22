import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CartProvider from '@/components/context/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '@/components/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Power-Button | Buy video games, consoles and more!',
  description: 'Shop Power-Button for video games for all platforms, consoles & more new tech.',
  openGraph: {
    title: 'Power-Button | Buy video games, consoles and more!',
    description: 'Shop Power-Button for video games for all platforms, consoles & more new tech.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
