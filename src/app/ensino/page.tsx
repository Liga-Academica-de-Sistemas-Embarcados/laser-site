import { ActivitiesGroupCard } from "@/components/ensino/ActivitiesGroupCard";
import { Header } from "@/components/Header";
import { getDictionary } from "../dictionaries";

export default async function Teaching() {
  const dict = await getDictionary("pt-BR");

  return (
    <main>
      <Header description={dict.teaching["text-description"]}>
        Atividades <span className="text-primary">educativas</span>
      </Header>
      <div className="flex flex-col gap-16 mb-20">
        {dict.teaching.activities
          .filter((activityGroup) => activityGroup.activities.length > 0)
          .map((activityGroup, visibleIndex) => (
            <ActivitiesGroupCard
              key={activityGroup["text-title"] + visibleIndex}
              solid={visibleIndex % 2 == 0}
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
