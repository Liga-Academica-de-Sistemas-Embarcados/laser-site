import clsx from 'clsx';

import { BaseContentCard, ContentCardProps } from '../BaseContentCard';
import { getDictionary } from '@/app/dictionaries';

function AreaChip({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center bg-[#E4E4E4] px-4 py-3 rounded-full">
      <span className='block leading-none md:text-lg text-solid'>{title}</span>
    </div>
  );
}

export async function AreasCard({ solid }: ContentCardProps) {
  const dict = await getDictionary('pt-BR');

  return (
    <BaseContentCard
      solid={solid}
      className={clsx({ 'text-solid': !solid }, 'flex flex-col md:flex-row gap-8 justify-around items-center py-20')}
    >
      <h2 className="text-2xl md:text-3xl">{dict.home.areas["text-title"]}</h2>
      <div className="flex gap-4 flex-wrap justify-around max-w-md">
        {
          dict.home.areas["text-areas"].map((area, index) => (
            <AreaChip key={`area-${area}-${index}`} title={area} />
          ))
        }
      </div>
    </BaseContentCard>
  );
}
