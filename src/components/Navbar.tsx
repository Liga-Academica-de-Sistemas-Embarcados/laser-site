'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/../public/logo.svg';

enum Page {
  Inicio = 'Início',
  Ensino = 'Ensino',
  Pesquisa = 'Pesquisa',
  Extensao = 'Extensão',
  Membros = 'Membros',
}

interface NavbarItemProps {
  page: Page;
  href: string;
  isSelected?: boolean;
}

function NavbarItem({ page, href, isSelected }: NavbarItemProps) {
  return (
    <li
      className={clsx(
        { 'text-primary': isSelected },
        'leading-0 transition-opacity hover:opacity-85'
      )}
    >
      <Link href={href}>{page}</Link>
    </li>
  );
}

export function Navbar() {
  const pathname = usePathname();

  const getPageFromPath = (path: string): Page | null => {
    if (path === '/') return Page.Inicio;
    if (path === '/ensino') return Page.Ensino;
    if (path === '/pesquisa') return Page.Pesquisa;
    if (path === '/extensao') return Page.Extensao;
    if (path === '/membros') return Page.Membros;
    return null;
  };

  const selectedPage = getPageFromPath(pathname);

  return (
    <nav className="flex justify-between items-center sticky bg-solid top-8 w-full h-12 rounded-full px-9 pr-36">
      <Link href="/">
        <Image src={logo} alt="LASER" width={64} height={17} priority />
      </Link>
      <ul className="flex gap-12">
        <NavbarItem
          page={Page.Inicio}
          href="/"
          isSelected={selectedPage === Page.Inicio}
        />
        <NavbarItem
          page={Page.Ensino}
          href="/ensino"
          isSelected={selectedPage === Page.Ensino}
        />
        <NavbarItem
          page={Page.Pesquisa}
          href="/pesquisa"
          isSelected={selectedPage === Page.Pesquisa}
        />
        <NavbarItem
          page={Page.Extensao}
          href="/extensao"
          isSelected={selectedPage === Page.Extensao}
        />
        <NavbarItem
          page={Page.Membros}
          href="/membros"
          isSelected={selectedPage === Page.Membros}
        />
      </ul>
    </nav>
  );
}
