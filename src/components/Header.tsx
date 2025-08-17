interface HeaderProps {
  children: React.ReactNode;
  description?: string;
}
export function Header({ children, description }: HeaderProps) {
  return (
    <header className="my-30 mx-24">
      <div className="flex flex-col gap-2 w-lg text-solid">
        <h1 className="text-6xl leading-tight">
          {children}
        </h1>
        {description && <p className="text-lg">{description}</p>}
      </div>
    </header>
  );
}