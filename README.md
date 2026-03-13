# Angular Blog 📰

Aplicacao de blog desenvolvida com Angular, com listagem de posts na home e pagina de detalhe por rota dinamica.

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Router](https://img.shields.io/badge/Angular%20Router-Rotas-EF6C00?style=for-the-badge&logo=angular&logoColor=white)
![Vitest](https://img.shields.io/badge/Testes-Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-0A8754?style=for-the-badge)

## Sumario 📑

- [Sobre](#sobre-ℹ️)
- [Funcionalidades](#funcionalidades-✨)
- [Tecnologias](#tecnologias-🛠️)
- [Como executar](#como-executar-🚀)
- [Scripts](#scripts-⚙️)
- [Estrutura do projeto](#estrutura-do-projeto-📁)
- [Rotas](#rotas-🧭)
- [Fonte de dados](#fonte-de-dados-🗂️)
- [Proximos passos](#proximos-passos-🎯)

## Sobre ℹ️

Projeto front-end criado para praticar fundamentos do Angular moderno:

- Componentizacao
- Navegacao com Angular Router
- Parametros de rota (`/content/:id`)
- Renderizacao de dados mockados

## Funcionalidades ✨

- Home com cards de conteudo
- Pagina de detalhe por ID
- Componente de menu e titulo
- Estrutura preparada para evoluir de mock para API

## Tecnologias 🛠️

- Angular 21
- TypeScript
- Angular Router
- CSS
- Vitest

## Como executar 🚀

1. Instale as dependencias:

```bash
npm install
```

2. Rode o projeto em desenvolvimento:

```bash
npm start
```

3. Acesse no navegador:

```text
http://localhost:4200
```

## Scripts ⚙️

```bash
npm start      # inicia o servidor de desenvolvimento
npm run build  # gera build de producao
npm run watch  # build em modo watch (development)
npm test       # executa testes
```

## Estrutura do projeto 📁

```text
src/
	app/
		components/
			big-card/
			small-card/
			menu-bar/
			menu-title/
		pages/
			home/
			content/
		data/
			dataFaker.ts
		app.routes.ts
```

## Rotas 🧭

Definidas em `src/app/app.routes.ts`:

- `path: ''` -> `Home`
- `path: 'content/:id'` -> `Content`

Exemplo de rota:

- `/content/1`

## Fonte de dados 🗂️

Os posts sao carregados do mock local em `src/app/data/dataFaker.ts`.

Para adicionar um novo post:

1. Abra `src/app/data/dataFaker.ts`
2. Adicione um objeto com:
   - `id`
   - `title`
   - `description`
   - `photoCover`

## Proximos passos 🎯

- Integrar com API REST
- Tipar os dados dos posts com interface
- Tratar caso de ID inexistente na rota
- Adicionar testes de componentes e rotas

## Autor 👷

Projeto desenvolvido para estudos na trilha de Angular da DIO.
