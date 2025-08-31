import { Header } from '@/components/Header';
import { MembersGroupCard } from '@/components/membros/MemberGroupCard';

export default function Teaching() {
  return (
    <main>
      <Header>
        Conheça a{' '}
        <span className="text-primary">equipe</span>
      </Header>
      <div className="flex flex-col gap-16 mb-20">
        <MembersGroupCard solid title="Membros Atuais" members={[
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
        ]} />
         <MembersGroupCard solid title="Alumni" members={[
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
          {
            name: 'Welton Felix',
            role: 'Desenvolvedor',
            email: 'welton@laser.com',
            pictureUrl: 'https://github.com/weltonfelix.png',
          },
        ]} />
      </div>
    </main>
  );
}