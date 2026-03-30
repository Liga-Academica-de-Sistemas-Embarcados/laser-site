import { clsx } from 'clsx';
import Image from 'next/image';

import { getDictionary } from '@/app/dictionaries';
import { BaseContentCard, ContentCardProps } from '../BaseContentCard';

export async function AboutUsCard({ solid }: ContentCardProps) {
  const dict = await getDictionary('pt-BR');
  const imageUrl = dict.extension["projects"][0]["image-url"];

  return (
    <BaseContentCard solid={solid} className={clsx({"text-solid": !solid}, "flex flex-col gap-4")}>
      <h2 className="font-[350] text-2xl md:text-3xl border-b border-primary w-fit pb-2 px-2">
        {dict.home["about-us"]["text-title"]}
      </h2>
      <div className="flex justify-between gap-20 items-center">
        <p className="text-lg">
          {dict.home["about-us"]["text-content"]}
        </p>
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={300}
            height={300}
            alt="LASER"
            className="hidden md:block rounded-3xl w-48 md:w-[300px] h-48 md:h-[300px] object-cover shrink-0"
          />
        ) : (
          null
        )}
      </div>
    </BaseContentCard>
  );
}
