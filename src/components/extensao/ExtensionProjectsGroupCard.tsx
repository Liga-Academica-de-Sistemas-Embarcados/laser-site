import { clsx } from 'clsx';
import Image from 'next/image';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

import { BaseContentCard, ContentCardProps } from '../BaseContentCard';
import { getDictionary } from '@/app/dictionaries';

interface ExtensionProjectsGroupCardProps extends ContentCardProps {
  title: React.ReactNode;
  projects: Omit<ExtensionProjectCardProps, 'variant'>[];
}

interface ExtensionProjectCardProps {
  title: string;
  description: string;
  location: string;
  date: string;
  // learnMoreURL: string;
  imageURL: string;
  variant?: 'light' | 'dark';
}

async function ExtensionProjectCard({ title, description, imageURL, location, date, variant='dark' }: ExtensionProjectCardProps) {
  const dict = await getDictionary('pt-BR');

  return (
    <div className={clsx(variant == 'dark' && "bg-solid text-foreground","flex flex-col w-full md:max-w-80 gap-6 p-6 rounded-4xl h-full")}>
      <Image
        src={imageURL}
        alt={`${dict.extension["alt-project-image-base"]} ${title}`}
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
        <span className={clsx(variant == 'dark' ? 'text-foreground-dark' : 'text-solid-light', 'flex gap-1 items-center text-sm')}><FiMapPin size={18} />{location}</span>
        <span className={clsx(variant == 'dark' ? 'text-foreground-dark' : 'text-solid-light', 'flex gap-1 items-center text-sm')}><FiCalendar  size={18} />{date}</span>
      </div>
    </div>
  );
}

export function ExtensionProjectsGroupCard({
  solid,
  projects
}: ExtensionProjectsGroupCardProps) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx({ 'text-solid': !solid }, 'flex flex-col gap-12')}
    >
      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
          projects.map((project, index) => (
            <ExtensionProjectCard
              key={`${project.title}-${index}`}
              title={project.title}
              description={project.description}
              location={project.location}
              date={project.date}
              imageURL={project.imageURL}
              variant={solid ? 'light' : 'dark'}
            />
          ))
        }
      </div>
    </BaseContentCard>
  );
}
