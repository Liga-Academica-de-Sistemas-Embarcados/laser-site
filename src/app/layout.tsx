import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import background from '@/../public/background.png';

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
          <main className="mt-10">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
