import { ExtensionContactUsCard } from '@/components/extensao/ExtensionContactUsCard';
import { ExtensionProjectsGroupCard } from '@/components/extensao/ExtensionProjectsGroupCard';
import { Header } from '@/components/Header';

export default function Extension() {
  return (
    <main>
      <Header
        description="Projetos, ações e eventos para divulgar sistemas embarcados ao público externo à UFPE."
      >
        Projetos de <span className="text-primary">Extensão</span>
      </Header>
      <div className="flex flex-col gap-16 mb-20">
        <ExtensionProjectsGroupCard
          title={
            <>
              Projetos de <span className="text-primary">competições</span>
            </>
          }
          projects={[
            {
              title: 'Introdução ao Arduino',
              description:
                'Aprenda os fundamentos do Arduino e como criar projetos simples.',
              location: 'Competição X',
              date: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
            {
              title: 'Introdução ao Arduino',
              description:
                'Aprenda os fundamentos do Arduino e como criar projetos simples.',
              location: 'Competição X',
              date: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
            {
              title: 'Introdução ao Arduino',
              description:
                'Aprenda os fundamentos do Arduino e como criar projetos simples.',
              location: 'Competição X',
              date: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
            {
              title: 'Atividade 2',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              location: 'Competição X',
              date: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
          ]}
        />
        <ExtensionContactUsCard  />
      </div>
    </main>
  );
}
