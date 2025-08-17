import { BaseContentCard, ContentCardProps } from '../BaseContentCard';
import { clsx } from 'clsx';
import { MemberCard, MemberCardProps } from '../MemberCard';

interface MembersGroupCardProps extends ContentCardProps {
  title: string;
  members: Omit<MemberCardProps, 'variant'>[];
}

export function MembersGroupCard({
  solid,
  title,
  members
}: MembersGroupCardProps) {
  return (
    <BaseContentCard
      solid={solid}
      className={clsx({ 'text-solid': !solid }, 'flex flex-col gap-12')}
    >
      <h2 className="text-3xl border-b-2 border-primary w-fit pb-2 px-2">
        {title}
      </h2>
      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
        {
          members.map((member, index) => (
            <MemberCard
              key={title+index}
              name={member.name}
              role={member.role}
              email={member.email}
              pictureUrl={member.pictureUrl}
              variant={solid ? 'light' : 'dark'}
            />
          ))
        }
      </div>
    </BaseContentCard>
  );
}