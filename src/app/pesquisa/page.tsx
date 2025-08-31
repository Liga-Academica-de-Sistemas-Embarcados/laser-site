import { Header } from '@/components/Header';
import { ProjectsGroupCard } from '@/components/pesquisa/ProjectsGroupCard';
import { ResearchContactUsCard } from '@/components/pesquisa/ResearchContactUsCard';

export default function Research() {
  return (
    <main>
      <Header
        description="Conheça os projetos que movem a Liga: em competições
e dentro do nosso próprio laboratório de ideias."
      >
        <span className="text-primary">Pesquisa</span> e Inovação
      </Header>
      <div className="flex flex-col gap-16 mb-20">
        <ProjectsGroupCard
          solid
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
              eventName: 'Competição X',
              year: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
            {
              title: 'Introdução ao Arduino',
              description:
                'Aprenda os fundamentos do Arduino e como criar projetos simples.',
              eventName: 'Competição X',
              year: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
            {
              title: 'Atividade 2',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              eventName: 'Competição X',
              year: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
          ]}
        />

        <ProjectsGroupCard
          title={
            <>
              Projetos <span className="text-primary">internos</span>
            </>
          }
          projects={[
            {
              title: 'Introdução ao Arduino',
              description:
                'Aprenda os fundamentos do Arduino e como criar projetos simples.',
              eventName: 'Competição X',
              year: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
            {
              title: 'Atividade 2',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              eventName: 'Competição X',
              year: '2023',
              imageURL: 'https://placecats.com/800/500',
            },
          ]}
        />
        <ResearchContactUsCard  />
      </div>
    </main>
  );
}
