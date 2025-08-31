# Website da LASER

Website oficial da Liga Acadêmica de Sistemas Embarcados (LASER) da Universidade Federal de Pernambuco (UFPE).

## 📖 Sobre o Projeto

Este é o website da LASER, desenvolvido com Next.js e React, apresentando informações sobre a liga, membros, projetos de pesquisa, atividades de ensino e projetos de extensão.

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React para produção
- **[React](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones

## 📁 Estrutura do Projeto

```text
laser-website/
├── public/                 # Arquivos estáticos
├── src/
│   ├── app/               # App Router do Next.js
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Página inicial
│   │   ├── ensino/        # Páginas de ensino
│   │   ├── extensao/      # Páginas de extensão
│   │   ├── ...
│   ├── components/        # Componentes React
│   │   ├── ensino/        # Componentes específicos de ensino
│   │   ├── extensao/      # Componentes específicos de extensão
│   │   ├── home/          # Componentes da página inicial
│   │   ├── ...
│   └── dictionaries/      # Internacionalização
└── ...                    # Arquivos de configuração
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Liga-Academica-de-Sistemas-Embarcados/laser-site.git
cd laser-site
```

1. Instale as dependências:

```bash
npm install
```

### Execução

#### Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:3000`.

#### Build para Produção

```bash
npm run build
npm run start
```

#### Lint

```bash
npm run lint
```

## 🎨 Componentes Principais

### Layout

- `Header` - Cabeçalho das páginas
- `Navbar` - Barra de navegação
- `Footer` - Rodapé com informações de contato

### Cards

- `BaseContentCard` - Card base para conteúdo
- `MemberCard` - Card para apresentação de membros
- `LinkButton` - Botão com link estilizado

## 🌍 Internacionalização

O projeto utiliza um sistema de dicionários para suporte a múltiplos idiomas:

- Dicionários localizados em `src/dictionaries/`
- Atualmente disponível em Português Brasileiro (`pt-BR.json`)
- Configuração em `src/app/dictionaries.ts`

## 🤝 Contribuição

1. Faça um fork do projeto
1. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
1. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
1. Push para a branch (`git push origin feature/nova-feature`)
1. Abra um Pull Request

## 📄 Licença

Este projeto é desenvolvido e mantido pela LASER - Liga Acadêmica de Sistemas Embarcados da UFPE sob a licença [MIT](LICENSE).

---

Desenvolvido com ❤️ pela [LASER - UFPE](https://github.com/Liga-Academica-de-Sistemas-Embarcados/laser-site)
