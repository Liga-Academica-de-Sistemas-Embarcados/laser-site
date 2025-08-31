import { BaseContentCard, ContentCardProps } from '../BaseContentCard';
import { clsx } from 'clsx';
import { LinkButton } from '../LinkButton';
import { MemberCard } from '../MemberCard';


export function TeamCard({ solid }: ContentCardProps) {
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
        <MemberCard
          name="Welton Felix"
          role="Desenvolvedor"
          email="welton@laser.com"
          pictureUrl="https://github.com/weltonfelix.png"
          variant={solid ? 'light' : 'dark'}
        />
        <MemberCard
          name="Welton Felix"
          role="Desenvolvedor"
          email="welton@laser.com"
          pictureUrl="https://github.com/weltonfelix.png"
          variant={solid ? 'light' : 'dark'}
        />
        <MemberCard
          name="Welton Felix"
          role="Desenvolvedor"
          email="welton@laser.com"
          pictureUrl="https://github.com/weltonfelix.png"
          variant={solid ? 'light' : 'dark'}
        />
      </div>
      <LinkButton href="/membros">Ver membros</LinkButton>
    </BaseContentCard>
  );
}
