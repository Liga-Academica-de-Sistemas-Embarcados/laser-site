import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

import './globals.css';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LASER - CIn',
  description: 'Liga Acadêmica de Sistemas Embarcados do CIn - UFPE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lexend.variable} antialiased bg-main`}>
        <div className="relative z-10 max-w-[1150px] mx-2 min-[1150px]:mx-auto">
          <Navbar />
          <div className="mt-10">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
