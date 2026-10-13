# API REST com NestJS

**API REST para gestão de alunos, professores, disciplinas e cursos**

API desenvolvida com NestJS e TypeScript para cadastrar, consultar, atualizar e excluir registros de alunos, professores, disciplinas e cursos por meio de endpoints HTTP. Os dados são persistidos em um banco MySQL/MariaDB com Prisma e acessados por meio de serviços e repositórios organizados em módulos.

# 1. Descrição

O projeto demonstra a construção de uma API REST usando **Node.js**, **NestJS**, **TypeScript** e **Prisma**. A aplicação organiza as funcionalidades em módulos, controllers, services, repositories e DTOs, além de aplicar validação de dados e respostas JSON para operações de CRUD.

> Os dados são armazenados em um banco MySQL/MariaDB. Para executar a aplicação localmente, o projeto inclui a configuração do ambiente com Docker Compose.

# 2. Funcionalidades

- Cadastro de alunos, professores, disciplinas e cursos;
- Listagem de todos os registros;
- Consulta de um registro pelo ID;
- Atualização parcial dos dados pelo ID;
- Exclusão pelo ID;
- Persistência em banco relacional com Prisma;
- Relação entre alunos e cursos;
- Relação entre professores e disciplinas;
- Validação de dados usando DTOs e `class-validator`;
- Organização por módulos e camadas de acesso a dados.

# 3. Tecnologias Utilizadas

- Node.js;
- NestJS;
- TypeScript;
- Prisma ORM;
- MySQL/MariaDB;
- Docker Compose;
- Express, por meio do adaptador `@nestjs/platform-express`;
- `class-validator` e `class-transformer`;
- Vitest;
- Oxlint.

# 4. Arquitetura e Organização do Projeto

```
api-aluno/
├── src/
│   ├── alunos/
│   │   ├── alunos.controller.ts
│   │   ├── alunos.module.ts
│   │   ├── alunos.repository.ts
│   │   ├── alunos.service.ts
│   │   └── dto/
│   │       ├── create-aluno.dto.ts
│   │       └── update-aluno.dto.ts
│   ├── professores/
│   │   ├── professores.controller.ts
│   │   ├── professores.module.ts
│   │   ├── professores.repository.ts
│   │   ├── professores.service.ts
│   │   └── dto/
│   │       ├── create-professor.dto.ts
│   │       └── update-professor.dto.ts
│   ├── disciplinas/
│   │   ├── disciplinas.controller.ts
│   │   ├── disciplinas.module.ts
│   │   ├── disciplinas.repository.ts
│   │   ├── disciplinas.service.ts
│   │   └── dto/
│   │       ├── create-disciplina.dto.ts
│   │       └── update-disciplina.dto.ts
│   ├── cursos/
│   │   ├── cursos.controller.ts
│   │   ├── cursos.module.ts
│   │   ├── cursos.repository.ts
│   │   ├── cursos.service.ts
│   │   └── dto/
│   │       ├── create-curso.dto.ts
│   │       └── update-curso.dto.ts
│   ├── prisma/
│   │   ├── prisma.module.ts
│   │   └── prisma.service.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── generated/
│       └── prisma/
├── prisma/
│   └── schema.prisma
├── test/
├── docker-compose.yml
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.build.json
├── vitest.config.ts
├── vitest.config.e2e.ts
├── oxlint.json
├── nest-cli.json
└── prisma7.config.ts
```

Descrição resumida:

- `src/main.ts` — inicializa a aplicação e inicia o servidor;
- `src/app.module.ts` — módulo raiz que importa os módulos da aplicação;
- `src/prisma/prisma.service.ts` — configura e gerencia a conexão com o banco usando Prisma;
- `src/alunos/alunos.controller.ts` — define as rotas HTTP de alunos;
- `src/alunos/alunos.service.ts` — implementa a lógica de negócios de alunos;
- `src/alunos/alunos.repository.ts` — executa as operações de acesso a dados com Prisma;
- `src/professores/professores.controller.ts` — define as rotas HTTP de professores;
- `src/professores/professores.service.ts` — implementa a lógica de negócios de professores;
- `src/professores/professores.repository.ts` — executa as consultas relacionadas a professores;
- `src/disciplinas/disciplinas.controller.ts` — define as rotas HTTP de disciplinas;
- `src/disciplinas/disciplinas.service.ts` — implementa a lógica de negócios de disciplinas;
- `src/disciplinas/disciplinas.repository.ts` — executa as consultas relacionadas a disciplinas;
- `src/cursos/cursos.controller.ts` — define as rotas HTTP de cursos;
- `src/cursos/cursos.service.ts` — implementa a lógica de negócios de cursos;
- `src/cursos/cursos.repository.ts` — executa as consultas relacionadas a cursos;
- `prisma/schema.prisma` — define o schema do banco e os relacionamentos do sistema;
- `package.json` — define as dependências e os comandos do projeto.

# 5. Pré-requisitos

- Node.js;
- npm;
- Docker e Docker Compose;
- MySQL/MariaDB;
- Git.

# 6. Instalação

## 6.1 Clone o repositório

```bash
git clone https://github.com/lara-peddinghausen/api-nestjs.git
```

## 6.2 Acesse a pasta do projeto

```bash
cd api-nestjs
```

## 6.3 Instale as dependências

```bash
npm install
```

# 7. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto utilizando como referência o arquivo `.env.example` e configure `DB_USER` e `DB_PASSWORD`.

Exemplo:
```
DB_USER=usuario_do_banco_de_dados
DB_PASSWORD=senha_do_banco_de_dados
```
**Importante:** senhas, tokens, chaves de API e outras informações sensíveis não devem ser armazenadas no repositório Git.

O arquivo `.env` deve estar incluído no `.gitignore`.

## 8. Configuração do Banco de Dados

Suba o container do MySQL com:

```bash
docker compose up -d
```

O arquivo `docker-compose.yml` cria o banco `api_rest`, o usuário `api_user` e o volume `mysql_data` para persistência dos dados.

Antes de iniciar a API, é necessário garantir que o banco e o schema do Prisma estejam prontos. O projeto usa as tabelas geradas a partir de `prisma/schema.prisma` e os modelos `Aluno`, `Curso`, `Professor` e `Disciplina`.

# 9. Execução do Projeto

```bash
npm run start:dev
```

Por padrão, o servidor fica disponível em `http://localhost:3000`. Para usar outra porta, defina a variável de ambiente `PORT` antes de iniciar a aplicação.

> Antes de iniciar, confirme que o banco MySQL/MariaDB está em execução e que a conexão com o Prisma foi configurada corretamente.

# 10. Endpoints da API

## Alunos

| Método | Endpoint      | Descrição                     |
| ------ | ------------- | ----------------------------- |
| GET    | `/alunos`     | Lista todos os alunos         |
| GET    | `/alunos/:id` | Busca um aluno pelo ID        |
| POST   | `/alunos`     | Cadastra um aluno             |
| PATCH  | `/alunos/:id` | Atualiza dados de um aluno    |
| DELETE | `/alunos/:id` | Remove um aluno               |

## Professores

| Método | Endpoint           | Descrição                         |
| ------ | ------------------ | --------------------------------- |
| GET    | `/professores`     | Lista todos os professores        |
| GET    | `/professores/:id` | Busca um professor pelo ID        |
| POST   | `/professores`     | Cadastra um professor             |
| PATCH  | `/professores/:id` | Atualiza dados de um professor    |
| DELETE | `/professores/:id` | Remove um professor               |

## Disciplinas

| Método | Endpoint            | Descrição                           |
| ------ | ------------------- | ----------------------------------- |
| GET    | `/disciplinas`      | Lista todas as disciplinas          |
| GET    | `/disciplinas/:id`  | Busca uma disciplina pelo ID        |
| POST   | `/disciplinas`      | Cadastra uma disciplina             |
| PATCH  | `/disciplinas/:id`  | Atualiza dados de uma disciplina    |
| DELETE | `/disciplinas/:id`  | Remove uma disciplina               |

## Cursos

| Método | Endpoint      | Descrição                    |
| ------ | ------------- | ---------------------------- |
| GET    | `/cursos`     | Lista todos os cursos        |
| GET    | `/cursos/:id` | Busca um curso pelo ID       |
| POST   | `/cursos`     | Cadastra um curso            |
| PATCH  | `/cursos/:id` | Atualiza dados de um curso   |
| DELETE | `/cursos/:id` | Remove um curso              |

# 11. Exemplos de Requisição

## Cadastro de aluno

```http
POST /alunos
Content-Type: application/json
```

```json
{
  "nome": "Ana",
  "email": "ana@email.com",
  "cursoId": 1
}
```

Resposta: objeto criado, incluindo o `id`.

## Cadastro de professor

```http
POST /professores
Content-Type: application/json
```

```json
{
  "nome": "Beatriz",
  "disciplinaIds": [1, 2]
}
```

## Cadastro de disciplina

```http
POST /disciplinas
Content-Type: application/json
```

```json
{
  "nome": "Algoritmos",
  "cargaHoraria": 80
}
```

## Cadastro de curso

```http
POST /cursos
Content-Type: application/json
```

```json
{
  "nome": "Análise e Desenvolvimento de Sistemas"
}
```

## Atualização de aluno

```http
PATCH /alunos/1
Content-Type: application/json
```

```json
{
  "nome": "Ana Silva",
  "email": "ana.silva@email.com",
  "cursoId": 2
}
```

Para consultar, atualizar ou remover, use `GET /alunos/1`, `PATCH /alunos/1` ou `DELETE /alunos/1`. Os endpoints de professores, disciplinas e cursos seguem o mesmo padrão.

# 12. Modelo de Dados

A API trabalha com as entidades `Aluno`, `Curso`, `Professor` e `Disciplina`:

```
Aluno
├── id
├── nome
├── email
├── cursoId
└── curso
```

```
Curso
├── id
├── nome
└── alunos
```

```
Professor
├── id
├── nome
└── disciplinas
```

```
Disciplina
├── id
├── nome
├── cargaHoraria
└── professores
```

**Estrutura das entidades:**

Aluno:
- `id`: identificador numérico;
- `nome`: nome do aluno;
- `email`: e-mail do aluno;
- `cursoId`: identificador do curso relacionado;
- `curso`: relação com o curso do aluno.

Curso:
- `id`: identificador numérico;
- `nome`: nome do curso;
- `alunos`: lista de alunos vinculados ao curso.

Professor:
- `id`: identificador numérico;
- `nome`: nome do professor;
- `disciplinas`: disciplinas ministradas pelo professor.

Disciplina:
- `id`: identificador numérico;
- `nome`: nome da disciplina;
- `cargaHoraria`: carga horária da disciplina;
- `professores`: professores que ministram a disciplina.

# 13. Autor

**Nome:** Lara Peddinghausen  
**Turma:** ADS 2024.2N  
**Unidade Curricular:** Programação Web 2  

# 14. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos e de aprendizado na disciplina de Programação Web 2. O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.