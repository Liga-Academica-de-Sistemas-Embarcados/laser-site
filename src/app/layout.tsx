import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

import { getDictionary } from './dictionaries';

import './globals.css';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

const dict = await getDictionary('pt-BR');

export const metadata: Metadata = {
  title: dict.metadata.title,
  description: dict.metadata.description,
  keywords: dict.metadata.keywords,
};

export default async function RootLayout({
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
