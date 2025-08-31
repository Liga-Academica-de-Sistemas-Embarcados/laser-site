import { clsx } from 'clsx';
import Image from 'next/image';

import { getDictionary } from '@/app/dictionaries';
import { BaseContentCard, ContentCardProps } from '../BaseContentCard';

export async function AboutUsCard({ solid }: ContentCardProps) {
  const dict = await getDictionary('pt-BR');

  return (
    <BaseContentCard solid={solid} className={clsx({"text-solid": !solid}, "flex flex-col gap-4")}>
      <h2 className="text-2xl md:text-3xl">{dict.home["about-us"]["text-title"]}</h2>
      <div className="flex justify-between gap-2 items-center">
        <p className="max-w-xl">
          {dict.home["about-us"]["text-content"]}
        </p>
        <Image src="/logo.svg" width={256}  height={256} alt="LASER" className="hidden md:block rounded-3xl" style={{
          width: '256px',
          height: '256px',
          objectFit: 'cover',
        }} />
      </div>
    </BaseContentCard>
  );
}
