import { clsx } from 'clsx';

import { BaseContentCard } from '../BaseContentCard';
import { LinkButton } from '../LinkButton';
import { getDictionary } from '@/app/dictionaries';

export async function ResearchContactUsCard({ solid }: { solid?: boolean }) {
  const dict = await getDictionary('pt-BR');

  return (
    <BaseContentCard
      solid={solid}
      className={clsx(
        { 'text-solid': !solid },
        'flex flex-col gap-6 items-center justify-center'
      )}
    >
      <h2 className="text-2xl md:text-3xl w-fit text-center">{dict.research.collaborate["text-title"]}</h2>
      <div className="flex flex-col items-center justify-center flex-wrap gap-8">
        <p className="md:text-lg text-center">
          {dict.research.collaborate["text-description"]}
        </p>
        <LinkButton href={"mailto:" + dict.research.collaborate["button-email"]} className='w-fit'>
          {dict.research.collaborate["button-cta"]}
        </LinkButton>
      </div>
    </BaseContentCard>
  );
}
