import { BaseContentCard } from '../BaseContentCard';
import { clsx } from 'clsx';
import { LinkButton } from '../LinkButton';

export function ResearchContactUsCard({ solid }: { solid?: boolean }) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx(
        { 'text-solid': !solid },
        'flex flex-col gap-6 items-center justify-center'
      )}
    >
      <h2 className="text-2xl md:text-3xl w-fit text-center">Quer colaborar com a pesquisa?</h2>
      <div className="flex flex-col items-center justify-center flex-wrap gap-8">
        <p className="md:text-lg text-center">
          Entre em contato conosco e ajude a expandir os horizontes dos sistemas
          embarcados.
        </p>
        <LinkButton href="mailto:laser@cin.ufpe.br" className='w-fit'>
          laser@cin.ufpe.br
        </LinkButton>
      </div>
    </BaseContentCard>
  );
}
