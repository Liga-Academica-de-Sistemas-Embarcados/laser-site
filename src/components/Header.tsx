interface HeaderProps {
  children: React.ReactNode;
  description?: string;
}
export function Header({ children, description }: HeaderProps) {
  return (
    <header className="mx-10 my-16 md:mx-24 md:my-30">
      <div className="flex flex-col gap-2 max-w-52 min-[500px]:max-w-72 min-[560px]:max-w-96 sm:max-w-sm md:max-w-lg text-solid">
        <h1 className="text-3xl md:text-6xl leading-tight">
          {children}
        </h1>
        {description && <p className="md:text-lg">{description}</p>}
      </div>
    </header>
  );
}