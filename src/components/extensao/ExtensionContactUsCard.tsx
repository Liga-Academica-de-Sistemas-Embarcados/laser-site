import { clsx } from 'clsx';

import { getDictionary } from '@/app/dictionaries';

import { BaseContentCard } from '../BaseContentCard';
import { LinkButton } from '../LinkButton';

export async function ExtensionContactUsCard({ solid }: { solid?: boolean }) {
  const dict = await getDictionary('pt-BR');

  return (
    <BaseContentCard
      solid={solid}
      className={clsx(
        { 'text-solid': !solid },
        'flex flex-col gap-6 items-center justify-center'
      )}
    >
      <h2 className="text-2xl md:text-3xl w-fit text-center">{dict.extension["contact-us"]["text-title"]}</h2>
      <div className="flex flex-col items-center justify-center flex-wrap gap-8">
        <p className="md:text-lg text-center">
          {dict.extension["contact-us"]["text-description"]}
        </p>
        <LinkButton href={"mailto:" + dict.extension["contact-us"]["button-email"]} className='w-fit'>
          {dict.extension["contact-us"]["button-cta"]}
        </LinkButton>
      </div>
    </BaseContentCard>
  );
}
