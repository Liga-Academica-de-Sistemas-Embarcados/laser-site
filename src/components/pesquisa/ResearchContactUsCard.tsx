import { BaseContentCard } from '../BaseContentCard';
import { clsx } from 'clsx';
import { LinkButton } from '../LinkButton';

export function ResearchContactUsCard({ solid }: { solid?: boolean }) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx(
        { 'text-solid': !solid },
        'flex flex-col gap-6 items-center'
      )}
    >
      <h2 className="text-3xl w-fit">Quer colaborar com a pesquisa?</h2>
      <div className="flex flex-col items-center flex-wrap gap-2">
        <p className="text-lg text-center">
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
