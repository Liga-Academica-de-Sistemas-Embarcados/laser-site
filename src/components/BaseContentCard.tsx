import clsx from 'clsx';

export interface ContentCardProps {
  solid?: boolean;
}

export interface BaseContentCardProps extends ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export function BaseContentCard({ solid, children, className }: BaseContentCardProps) {
  return (
    <div className={clsx('rounded-3xl p-8 md:p-11', { 'bg-solid': solid, 'bg-[#f2f2f2] border border-[#DADADA]': !solid }, className)}>
      {children}
    </div>
  );
}
