import { ExtensionContactUsCard } from '@/components/extensao/ExtensionContactUsCard';
import { ExtensionProjectsGroupCard } from '@/components/extensao/ExtensionProjectsGroupCard';
import { Header } from '@/components/Header';
import { getDictionary } from '../dictionaries';

export default async function Extension() {
  const dict = await getDictionary('pt-BR');

  return (
    <main>
      <Header
        description={dict.extension["text-description"]}
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
          projects={
            dict.extension.projects.map((project) => (
              {
                title: project["text-title"],
                description: project["text-description"],
                location: project["text-location"],
                date: project["text-date"],
                imageURL: project["image-url"],
              }
            ))
          }
        />
        <ExtensionContactUsCard  />
      </div>
    </main>
  );
}
