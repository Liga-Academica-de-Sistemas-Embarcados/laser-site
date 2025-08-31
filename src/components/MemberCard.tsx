import clsx from "clsx";
import Image from "next/image";
import { FiMail } from "react-icons/fi";

export interface MemberCardProps {
  name: string;
  role?: string;
  email?: string;
  pictureUrl: string;
  variant?: 'light' | 'dark';
}

export function MemberCard({ name, role, email, pictureUrl, variant = 'light' }: MemberCardProps) {
  return (
    <div className="flex flex-col gap-4 w-48 md:w-56">
      <Image
        src={pictureUrl}
        width={216}
        height={216}
        alt={`Foto de ${name}, ${role} na LASER`}
        className="rounded-3xl w-48 md:w-56"
      />
      <div className="flex flex-col gap-4 font-light">
        <div className="flex flex-col gap-1">
          <span className="text-lg">{name}</span>
          <span className="text-sm">{role}</span>
        </div>
        <div
          className={clsx(
            {
              'text-solid bg-background': variant === 'light',
              'text-foreground bg-solid font-normal': variant === 'dark',
            },
            'flex gap-2 text-xs md:text-sm px-2 py-1 items-center rounded-full w-fit'
          )}
        >
          <FiMail size={18} />
          {email}
        </div>
      </div>
    </div>
  );
}
