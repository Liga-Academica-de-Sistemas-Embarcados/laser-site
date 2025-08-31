import { Header } from "@/components/Header";
import { MembersGroupCard } from "@/components/membros/MemberGroupCard";

import { getDictionary } from "../dictionaries";

export default async function Members() {
  const dict = await getDictionary("pt-BR");

  return (
    <main>
      <Header>
        Conheça a <span className="text-primary">equipe</span>
      </Header>
      <div className="flex flex-col gap-16 mb-20">
        <MembersGroupCard
          solid
          title={dict.members.current["text-title"]}
          members={dict.members.current.items.map((member) => ({
            name: member["text-name"],
            role: member["text-role"],
            email: member["text-email"],
            pictureUrl: member["image-url"],
          }))}
        />
        {dict.members.alumni.items.length > 0 && (
          <MembersGroupCard
            solid
            title={dict.members.alumni["text-title"]}
            members={dict.members.alumni.items.map((member) => ({
              name: member["text-name"],
              role: member["text-role"],
              email: member["text-email"],
              pictureUrl: member["image-url"],
            }))}
          />
        )}
      </div>
    </main>
  );
}
