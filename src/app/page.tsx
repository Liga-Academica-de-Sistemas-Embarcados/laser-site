import { Header } from '@/components/Header';
import { AboutUsCard } from '@/components/home/AboutUsCard';
import { AreasCard } from '@/components/home/AreasCard';
import { ProjectsCard } from '@/components/home/ProjectsCard';
import { TeamCard } from '@/components/home/TeamCard';

export default function Home() {
  return (
    <main>
      <Header>
        Liga Acadêmica de{' '}
        <span className="text-primary">Sistemas Embarcados</span>
      </Header>
      <div className="flex flex-col gap-16 mb-20">
        <AboutUsCard solid />
        <AreasCard />
        <TeamCard solid />
        {/* <ProjectsCard /> */}
      </div>
    </main>
  );
}
