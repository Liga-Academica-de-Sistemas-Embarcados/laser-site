import { ActivitiesGroupCard } from '@/components/ensino/ActivitiesGroupCard';
import { Header } from '@/components/Header';

export default function Teaching() {
  return (
    <main>
      <Header>
        Atividades{' '}
        <span className="text-primary">educativas</span>
      </Header>
      <div className="flex flex-col gap-4 mb-20">
        <ActivitiesGroupCard solid title="Workshops" activities={[
          {
            title: 'Introdução ao Arduino',
            description: 'Aprenda os fundamentos do Arduino e como criar projetos simples.',
            durationInHours: 2,
            imageURL: 'https://placecats.com/800/500',
            learnMoreURL: '#',
            level: 'Básico'
          },
          {
            title: 'Atividade 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            durationInHours: 2,
            imageURL: 'https://placecats.com/800/500',
            learnMoreURL: '#',
            level: 'Básico'
          }
        ]} />

        <ActivitiesGroupCard title="Oficinas" activities={[
          {
            title: 'Introdução ao Arduino',
            description: 'Aprenda os fundamentos do Arduino e como criar projetos simples.',
            durationInHours: 2,
            imageURL: 'https://placecats.com/800/500',
            learnMoreURL: '#',
            level: 'Básico'
          },
          {
            title: 'Atividade 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            durationInHours: 2,
            imageURL: 'https://placecats.com/800/500',
            learnMoreURL: '#',
            level: 'Básico'
          }
        ]} />

        <ActivitiesGroupCard solid title="Palestras" activities={[
          {
            title: 'Introdução ao Arduino',
            description: 'Aprenda os fundamentos do Arduino e como criar projetos simples.',
            durationInHours: 2,
            imageURL: 'https://placecats.com/800/500',
            learnMoreURL: '#',
            level: 'Básico'
          },
          {
            title: 'Atividade 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            durationInHours: 2,
            imageURL: 'https://placecats.com/800/500',
            learnMoreURL: '#',
            level: 'Básico'
          }
        ]} />
      </div>
    </main>
  );
}
