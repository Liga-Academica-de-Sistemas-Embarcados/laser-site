import { clsx } from "clsx";
import Image from "next/image";
import { FiClock } from "react-icons/fi";

import { BaseContentCard, ContentCardProps } from "../BaseContentCard";
import { LinkButton } from "../LinkButton";
import { getDictionary } from "@/app/dictionaries";

interface ActivitiesGroupCardProps extends ContentCardProps {
  title: string;
  activities: Omit<ActivityCardProps, "variant">[];
}

interface ActivityCardProps {
  title: string;
  description: string;
  durationInHours: number;
  level: string;
  learnMoreURL: string;
  imageURL: string;
  variant?: 'light' | 'dark';
}

async function ActivityCard({ title, description, durationInHours, level, learnMoreURL, imageURL, variant='dark' }: ActivityCardProps) {
  const dict = await getDictionary('pt-BR');

  return (
    <div className="flex flex-col max-w-2xl gap-8">
      <Image
        src={imageURL}
        alt={`${dict.teaching['alt-activity-image']} ${title}`}
        width={768}
        height={288}
        style={{
          objectFit: 'cover',
        }}
        className="rounded-3xl w-3xl h-40 md:h-72"
      />
      <div className='flex flex-col gap-2 md:gap-4'>
        <h3 className='text-lg md:text-2xl'>{title}</h3>
        <p className={clsx(variant == 'dark' ? 'text-foreground-dark' : 'text-solid-light')}>{description}</p>
        <div className={clsx(variant == 'dark' ? 'text-foreground-dark' : 'text-solid-light', 'inline-flex')}>
          <div className='inline-flex items-center gap-1'>
            <FiClock size={18} />
            <span>{durationInHours}h&nbsp;·&nbsp;</span>
          </div>
          <span className='inline-block'>{dict.teaching["text-level"]}: {level}</span>
        </div>
        <hr className={clsx(variant == 'dark' ? 'border-foreground-dark' : 'border-solid-light', "h-px my-2 md:my-0")} />
        <LinkButton href={learnMoreURL} className="w-fit px-8">{dict.teaching["button-view-more-activity"]}</LinkButton>
      </div>
    </div>
  );
}

export async function ActivitiesGroupCard({
  solid,
  title,
  activities
}: ActivitiesGroupCardProps) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx({ 'text-solid': !solid }, 'flex flex-col gap-8 md:gap-12')}
    >
      <h2 className="text-2xl md:text-3xl border-b-2 border-primary w-fit pb-2 px-2">
        {title}
      </h2>
      <div className="flex flex-col gap-14 justify-between items-center">
        {
          activities.map((activity, index) => (
            <ActivityCard
              key={title+index}
              title={activity.title}
              description={activity.description}
              durationInHours={activity.durationInHours}
              level={activity.level}
              learnMoreURL={activity.learnMoreURL}
              imageURL={activity.imageURL}
              variant={solid ? 'dark' : 'light'}
            />
          ))
        }
      </div>
    </BaseContentCard>
  );
}
