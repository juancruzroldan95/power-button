import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
