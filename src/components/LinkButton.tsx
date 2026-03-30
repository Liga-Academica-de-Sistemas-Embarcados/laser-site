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
      className={clsx(
        "bg-primary text-solid font-[350] border border-primary px-5 py-2.5 rounded-xl transition-all hover:opacity-85 hover:bg-transparent hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
