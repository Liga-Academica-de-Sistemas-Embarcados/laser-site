import { BaseContentCard, ContentCardProps } from '../BaseContentCard';
import clsx from 'clsx';

function AreaChip({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center bg-primary-light px-2 py-1 rounded-full">
      <span className='block leading-none text-lg text-solid'>{title}</span>
    </div>
  );
}

export function AreasCard({ solid }: ContentCardProps) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx({ 'text-solid': !solid }, 'flex gap-4 justify-around items-center py-20')}
    >
      <h2 className="text-3xl">Áreas de atuação</h2>
      <div className="flex gap-4 flex-wrap justify-around max-w-md">
        <AreaChip title="Embarcados" />
        <AreaChip title="Sistemas críticos" />
        <AreaChip title="Internet das coisas" />
        <AreaChip title="Automotivo" />
        <AreaChip title="Segurança" />
        <AreaChip title="Embarcado" />
        <AreaChip title="Embarcados" />
        <AreaChip title="Embarcados" />
      </div>
    </BaseContentCard>
  );
}
