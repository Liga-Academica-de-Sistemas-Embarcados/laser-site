import { clsx } from 'clsx';
import Image from 'next/image';

import { BaseContentCard, ContentCardProps } from '../BaseContentCard';
import { getDictionary } from '@/app/dictionaries';

interface ProjectsGroupCardProps extends ContentCardProps {
  title: React.ReactNode;
  projects: Omit<ProjectCardProps, 'variant'>[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  eventName: string;
  year: string;
  // learnMoreURL: string;
  imageURL: string;
  variant?: 'light' | 'dark';
}

async function ProjectCard({ title, description, imageURL, eventName, year, variant='dark' }: ProjectCardProps) {
  const dict = await getDictionary('pt-BR');

  return (
    <div className="flex flex-col w-full md:max-w-72 gap-6">
      <Image
        src={imageURL}
        alt={`${dict.research['alt-project-image-base']} ${title}`}
        width={288}
        height={144}
        style={{
          objectFit: 'cover',
        }}
        className="rounded-3xl w-full md:w-72 h-40 md:h-36"
      />
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg'>{title}</h3>
        <p className={clsx(variant == 'dark' ? 'text-foreground-dark' : 'text-solid-light', 'text-sm')}>{description}</p>
        <span className={clsx(variant == 'dark' ? 'text-foreground-dark' : 'text-solid-light', 'text-sm')}>{eventName} • {year}</span>
      </div>
    </div>
  );
}

export function ProjectsGroupCard({
  solid,
  title,
  projects
}: ProjectsGroupCardProps) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx({ 'text-solid': !solid }, 'flex flex-col gap-8 md:gap-12')}
    >
      <h2 className="text-2xl md:text-3xl w-fit">
        {title}
      </h2>
      <div className="flex justify-around items-start flex-wrap gap-8">
        {
          projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              title={project.title}
              description={project.description}
              eventName={project.eventName}
              year={project.year}
              imageURL={project.imageURL}
              variant={solid ? 'dark' : 'light'}
            />
          ))
        }
      </div>
    </BaseContentCard>
  );
}
