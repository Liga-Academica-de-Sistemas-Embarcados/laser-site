import { clsx } from 'clsx';

import { BaseContentCard, ContentCardProps } from '../BaseContentCard';
import { LinkButton } from '../LinkButton';
import { MemberCard } from '../MemberCard';
import { getDictionary } from '@/app/dictionaries';


export async function TeamCard({ solid }: ContentCardProps) {
  const dict = await getDictionary('pt-BR');

  return (
    <BaseContentCard
      solid={solid}
      className={clsx(
        { 'text-solid': !solid },
        'flex flex-col items-center gap-14'
      )}
    >
      <h2 className="text-2xl md:text-3xl">
        Conheça a <span className="text-primary">equipe</span>
      </h2>
      <div className="flex w-full justify-evenly flex-wrap gap-16 items-center">
        {dict.home.team.members.map((member, index) => (
          <MemberCard
            key={`team-member-${index}`}
            name={member["text-name"]}
            role={member["text-role"]}
            email={member["text-email"]}
            pictureUrl={member["image-url"]}
            variant={solid ? 'light' : 'dark'}
          />
        ))}
      </div>
      <LinkButton href="/membros">{dict.home.team["button-view-members"]}</LinkButton>
    </BaseContentCard>
  );
}
