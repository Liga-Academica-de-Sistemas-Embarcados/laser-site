import { Header } from "@/components/Header";
import { ProjectsGroupCard } from "@/components/pesquisa/ProjectsGroupCard";
import { ResearchContactUsCard } from "@/components/pesquisa/ResearchContactUsCard";

import { getDictionary } from "../dictionaries";

export default async function Research() {
  const dict = await getDictionary("pt-BR");

  return (
    <main>
      <Header
        description={dict.research["text-description"]}
      >
        <span className="text-primary">Pesquisa</span> e Inovação
      </Header>
      <div className="flex flex-col gap-16 mb-20">
        {dict.research.contests.projects.length > 0 && (
          <ProjectsGroupCard
            solid
            title={
              <>
                Projetos de <span className="text-primary">competições</span>
              </>
            }
            projects={dict.research.contests.projects.map((project) => ({
              title: project["text-title"],
              description: project["text-description"],
              eventName: project["text-contest-name"],
              year: project["text-year"],
              imageURL: project["image-url"],
            }))}
          />
        )}

        {dict.research.internal.projects.length > 0 && (
          <ProjectsGroupCard
            title={
              <>
                Projetos <span className="text-primary">internos</span>
              </>
            }
            projects={dict.research.internal.projects.map((project) => ({
              title: project["text-title"],
              description: project["text-description"],
              eventName: project["text-event"],
              year: project["text-year"],
              imageURL: project["image-url"],
            }))}
          />
        )}
        <ResearchContactUsCard />
      </div>
    </main>
  );
}
