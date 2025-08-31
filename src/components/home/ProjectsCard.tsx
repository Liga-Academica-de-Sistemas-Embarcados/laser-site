import clsx from "clsx";

import { BaseContentCard, ContentCardProps } from "../BaseContentCard";
import Image from "next/image";
import { getDictionary } from "@/app/dictionaries";
import Link from "next/link";

interface ProjectChipProps {
  alt: string;
  src: string;
  url: string;
}
function ProjectChip({ alt, src, url }: ProjectChipProps) {
  return (
    <Link href={url}>
      <Image alt={alt} src={src} width={96} height={96} className="flex items-center object-cover  justify-center w-24 h-24 rounded-full" />
    </Link>
  );
}

export async function ProjectsCard({ solid }: ContentCardProps) {
  const dict = await getDictionary("pt-BR");

  return (
    <BaseContentCard
      solid={solid}
      className={clsx(
        { "text-solid": !solid },
        "flex flex-col md:flex-row gap-8 justify-around items-center"
      )}
    >
      <h2 className="text-2xl md:text-3xl">Nossos Projetos</h2>
      <div className="flex gap-4 flex-wrap justify-around max-w-md">
        {
          dict.home.projects.items.map((project, index) => (
            <ProjectChip
              key={`project-chip-${index}`}
              alt={project["alt-title"]}
              src={project["image-url"]}
              url={project["link-url"]}
            />
          ))
        }
      </div>
    </BaseContentCard>
  );
}
