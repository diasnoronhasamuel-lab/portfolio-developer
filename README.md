# Portfólio Full Stack

Aplicação React/Vite com API Express e SQLite. Os projetos são consultados pela API e há um formulário de contato que grava mensagens no banco.

## Requisitos

- Node.js 22 LTS (22.12 ou superior) e npm.
- `better-sqlite3` usa um módulo nativo; no Windows, use uma distribuição Node LTS compatível e, se o npm solicitar compilação, instale as ferramentas C++ para Node.js.

## Configuração

1. Copie `server/.env.example` para `server/.env`.
2. Defina `ADMIN_PASSWORD` com uma senha forte. Mantenha `PORT=3001` e `CLIENT_URL=http://localhost:5173` no desenvolvimento local.
3. Opcionalmente, copie `client/.env.example` para `client/.env`. A URL padrão da API é `http://localhost:3001`.
4. Na raiz do projeto, instale as dependências:

   ```bash
   npm install
   npm --prefix client install
   npm --prefix server install
   ```

## Executar

Na raiz:

```bash
npm run dev
```

O front-end fica em http://localhost:5173 e a API em http://localhost:3001.

Para iniciar separadamente, use `npm run dev:client` ou `npm run dev:server`.
No primeiro início do servidor, as tabelas são criadas e os três projetos reais são inseridos quando a tabela ainda está vazia. O arquivo SQLite é criado em `server/portfolio.db`.

## Rotas

- `GET /api/health` — status da API.
- `GET /api/projects` — projetos ordenados pela posição.
- `POST /api/contact` — recebe `{ "name", "email", "message" }`, valida e salva a mensagem.
- `GET /api/admin/messages` — lista mensagens; envie `Authorization: Bearer <ADMIN_PASSWORD>`.

O formulário e a página `/admin` ficam disponíveis na aplicação React. Mensagens de contato requerem API em execução. A URL de origem autorizada pelo CORS deve corresponder a `CLIENT_URL`.
