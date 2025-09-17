'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

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

interface WideNavbarItemsProps {
  pages: Record<Page, string>;
  selectedPage: Page | null;
}

function WideNavbarItems({ pages, selectedPage }: WideNavbarItemsProps) {
  return (
    <>
      {Object.entries(pages).map(([page, href]) => (
        <NavbarItem
          key={page}
          page={page as Page}
          href={href}
          isSelected={selectedPage === page}
        />
      ))}
    </>
  );
}

interface NavbarProps {
  onSidebarOpen?: () => void;
  onSidebarClose?: () => void;
}

export function Navbar({ onSidebarOpen, onSidebarClose }: NavbarProps) {
  const pathname = usePathname();

  const getPageFromPath = (path: string): Page | null => {
    if (path === '/') return Page.Inicio;
    if (path === '/ensino') return Page.Ensino;
    if (path === '/pesquisa') return Page.Pesquisa;
    if (path === '/extensao') return Page.Extensao;
    if (path === '/membros') return Page.Membros;
    return null;
  };

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const selectedPage = getPageFromPath(pathname);

  function handleOpenSidebar() {
    setSideBarOpen(true);
    if (onSidebarOpen) onSidebarOpen();
  }

  function handleCloseSidebar() {
    setSideBarOpen(false);
    if (onSidebarClose) onSidebarClose();
  }

  const pages = {
    [Page.Inicio]: '/',
    [Page.Ensino]: '/ensino',
    [Page.Pesquisa]: '/pesquisa',
    [Page.Extensao]: '/extensao',
    [Page.Membros]: '/membros',
  };

  return (
    <nav data-sidebar-open={sideBarOpen ? "true" : "false"} className="flex justify-center lg:justify-between items-center sticky shadow-[0_1px_5px_0_rgba(242,242,242,0.15)] bg-solid top-4 md:top-8 w-full h-12 rounded-full px-9 lg:pr-36">
      <MenuButton iconSize={24} onClick={handleOpenSidebar} />
      <Link href="/">
        <Image src={logo} alt="LASER" width={64} height={17} priority />
      </Link>

      <SideBarMenu
        isOpen={sideBarOpen}
        onClose={handleCloseSidebar}
        pages={pages}
        selectedPage={selectedPage}
      />
      <ul className="hidden lg:flex gap-12">
        <WideNavbarItems pages={pages} selectedPage={selectedPage} />
      </ul>
    </nav>
  );
}

interface MenuButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  iconSize?: number;
}

function MenuButton({
  onClick,
  className,
  iconSize,
  ...props
}: MenuButtonProps) {
  return (
    <button
      className={`lg:hidden absolute left-4 p-1 cursor-pointer hover:opacity-85 active:opacity-75 ${className}`}
      onClick={onClick}
      {...props}
    >
      <FiMenu className="text-primary" size={iconSize} />
    </button>
  );
}

interface SideBarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pages: Record<Page, string>;
  selectedPage?: Page | null;
}

function SideBarMenu({
  isOpen,
  onClose,
  pages,
  selectedPage,
}: SideBarMenuProps) {
  return (
    <>
      <div
        className={clsx(
          `fixed inset-0 z-40 bg-black opacity-50 transition-opacity`,
          { 'hidden pointer-events-none': !isOpen }
        )}
        onClick={onClose}
      />
      <div
        className={`fixed inset-0 left-0 z-50 w-fit h-screen min-w-xs flex flex-col gap-8 bg-solid px-6 py-4 shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center gap-6 border-b pb-2 border-solid-light ">
          <Link href="/">
            <Image src={logo} alt="LASER" width={64} height={17} priority />
          </Link>
          <button onClick={onClose} className="p-1 cursor-pointer">
            <FiX
              size={24}
              className="text-solid-light hover:opacity-85 active:opacity-75"
            />
          </button>
        </div>
        <ul className="flex flex-col gap-2 h-full overflow-y-auto">
          {Object.entries(pages).map(([page, href]) => (
            <Link key={page} href={href} onClick={onClose}>
              <li
                className={clsx(
                  'gap-3 p-3 rounded-xl hover:opacity-85 active:opacity-75',
                  { 'bg-solid-lighter': selectedPage === page }
                )}
              >
                {page}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
