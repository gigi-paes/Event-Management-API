# Event Management API

Este projeto é uma API de gerenciamento de inscrições e indicações para eventos. A aplicação permite realizar inscrições, gerar links de indicação e acompanhar métricas de cliques e convites em tempo real.

## Tecnologias Utilizadas

* **Node.js & TypeScript** (Ambiente de execução e tipagem)
* **Fastify** (Framework web focado em performance)
* **Drizzle ORM** (Interação com o banco de dados SQL)
* **PostgreSQL** (Banco de dados principal via Docker)
* **Redis** (Armazenamento em cache para rankings e métricas)
* **Zod** (Validação de dados e contratos de API)
* **Swagger** (Documentação automática das rotas)
  
<img width="1099" height="499" alt="image" src="https://github.com/user-attachments/assets/a2ac2ef8-1f77-4a1b-a2c8-aae4d098299c" />


## Arquitetura e Funcionalidades

### 1. Sistema de Inscrições (`/subscriptions`)
Permite que novos usuários se inscrevam no evento. A rota valida nome e e-mail usando Zod e persiste os dados no PostgreSQL.

### 2. Sistema de Referência (Indicações)
Cada usuário pode gerar um link único. Quando outra pessoa clica ou se inscreve através desse link, o sistema contabiliza:
* **Cliques no Link:** Armazenados no Redis para acesso ultra rápido.
* **Inscrições por Indicação:** Registra quem indicou quem, permitindo criar um ranking.

### 3. Ranking e Métricas
A API fornece endpoints para consultar:
* Quantidade de cliques por usuário.
* Quantidade de convites feitos por usuário.
* Ranking geral de indicações.

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
Instale as dependências:

Bash
npm install
Suba os serviços do Docker (Postgres & Redis):

Bash
docker compose up -d
Rode as migrações do banco de dados:

Bash
npx drizzle-kit push
Inicie o servidor de desenvolvimento:

Bash
npm run dev
O servidor estará rodando em http://localhost:3333. 
Acesse http://localhost:3333/docs para ver a documentação Swagger.
