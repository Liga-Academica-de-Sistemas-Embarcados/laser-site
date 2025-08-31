import clsx from 'clsx';

import { BaseContentCard, ContentCardProps } from '../BaseContentCard';

function ProjectChip() {
  return (
    <div className="flex items-center justify-center bg-primary-light px-2 w-24 h-24 rounded-full"></div>
  );
}

export function ProjectsCard({ solid }: ContentCardProps) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx(
        { 'text-solid': !solid },
        'flex flex-col md:flex-row gap-8 justify-around items-center'
      )}
    >
      <h2 className="text-2xl md:text-3xl">Nossos Projetos</h2>
      <div className="flex gap-4 flex-wrap justify-around max-w-md">
        <ProjectChip />
        <ProjectChip />
        <ProjectChip />
        <ProjectChip />
        <ProjectChip />
        <ProjectChip />
        <ProjectChip />
        <ProjectChip />
      </div>
    </BaseContentCard>
  );
}
