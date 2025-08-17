import { BaseContentCard } from '../BaseContentCard';
import { clsx } from 'clsx';
import { LinkButton } from '../LinkButton';

export function ExtensionContactUsCard({ solid }: { solid?: boolean }) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx(
        { 'text-solid': !solid },
        'flex flex-col gap-6 items-center'
      )}
    >
      <h2 className="text-3xl w-fit">Quer levar a Laser para seu evento?</h2>
      <div className="flex flex-col items-center flex-wrap gap-2">
        <p className="text-lg text-center">
          Entre em contato para agendar oficinas, exposições ou visitas técnicas.
        </p>
        <LinkButton href="mailto:laser@cin.ufpe.br" className='w-fit'>
          laser@cin.ufpe.br
        </LinkButton>
      </div>
    </BaseContentCard>
  );
}
