import { clsx } from 'clsx';
import Link, { LinkProps } from 'next/link';

interface ButtonProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function LinkButton({ children, href, className, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx("bg-primary text-solid px-4 py-2 rounded-full hover:opacity-85 transition-opacity", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
