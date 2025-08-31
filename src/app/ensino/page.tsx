import { ActivitiesGroupCard } from "@/components/ensino/ActivitiesGroupCard";
import { Header } from "@/components/Header";
import { getDictionary } from "../dictionaries";

export default async function Teaching() {
  const dict = await getDictionary("pt-BR");

  return (
    <main>
      <Header>
        Atividades <span className="text-primary">educativas</span>
      </Header>
      <div className="flex flex-col gap-16 mb-20">
        {dict.teaching.activities.map((activityGroup, index) => (
          <ActivitiesGroupCard
            key={activityGroup["text-title"] + index}
            solid={index % 2 == 0}
            title={activityGroup["text-title"]}
            activities={activityGroup.activities.map((activity) => ({
              title: activity["text-title"],
              description: activity["text-description"],
              durationInHours: activity["text-duration-hours"],
              level: activity["text-level"],
              learnMoreURL: activity["link-view-more"],
              imageURL: activity["image-url"],
            }))}
          />
        ))}
      </div>
    </main>
  );
}
