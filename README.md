# API REST com NestJS

**API REST para gestão de alunos e professores**

API desenvolvida com NestJS e TypeScript para cadastrar, consultar, atualizar e excluir alunos e professores por meio de endpoints HTTP. Os dados são persistidos em banco MySQL e acessados por meio de repositories e serviços organizados em módulos.

# 1. Descrição

O projeto demonstra a construção de uma API REST usando **Node.js**, **NestJS** e **TypeScript**. A aplicação organiza as funcionalidades em módulos, controllers, services e repositories, e utiliza respostas JSON para operações de CRUD.

> Os dados são armazenados em um banco MySQL. Para executar a aplicação localmente, o projeto também inclui a configuração do banco com Docker Compose.

# 2. Funcionalidades

- Cadastro de alunos e professores;
- Listagem de todos os alunos e professores;
- Consulta de um registro pelo ID;
- Atualização de dados pelo ID;
- Exclusão pelo ID;
- Persistência em banco MySQL;
- Organização por módulos e camadas de acesso a dados.

# 3. Tecnologias Utilizadas

- Node.js;
- NestJS;
- TypeScript;
- MySQL;
- Docker Compose;
- Express, por meio do adaptador `@nestjs/platform-express`;
- Vitest;
- Oxlint.

# 4. Arquitetura e Organização do Projeto

```
api-nestjs/
├── src/
│   ├── alunos/
│   │   ├── alunos.controller.ts
│   │   ├── alunos.module.ts
│   │   ├── alunos.repository.ts
│   │   └── alunos.service.ts
│   ├── database/
│   │   ├── database.module.ts
│   │   └── database.service.ts
│   ├── professores/
│   │   ├── professores.controller.ts
│   │   ├── professores.module.ts
│   │   ├── professores.repository.ts
│   │   └── professores.service.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── docker-compose.yml
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.build.json
├── vitest.config.ts
├── vitest.config.e2e.ts
└── oxlint.json
```

Descrição resumida:

- `src/main.ts` — inicializa a aplicação e inicia o servidor;
- `src/app.module.ts` — módulo raiz que importa os módulos de alunos e professores;
- `src/database/database.service.ts` — configura e gerencia a conexão com o banco MySQL;
- `src/alunos/alunos.controller.ts` — define as rotas HTTP de alunos;
- `src/alunos/alunos.service.ts` — implementa a lógica de negócios de alunos;
- `src/alunos/alunos.repository.ts` — executa as consultas SQL relacionadas a alunos;
- `src/professores/professores.controller.ts` — define as rotas HTTP de professores;
- `src/professores/professores.service.ts` — implementa a lógica de negócios de professores;
- `src/professores/professores.repository.ts` — executa as consultas SQL relacionadas a professores;
- `package.json` — define as dependências e os comandos do projeto.

# 5. Pré-requisitos

- Node.js;
- npm;
- Docker e Docker Compose;
- MySQL;
- Git.

# 6. Instalação

## 6.1 Clone o repositório

```bash
git clone <https://github.com/lara-peddinghausen/api-nestjs.git>
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

O arquivo .env deve estar incluído no .gitignore.

## 8. Configuração do Banco de Dados

Suba o container do MySQL com:

```bash
docker compose up -d
```

O `docker-compose.yml` cria o banco `api_rest`, o usuário `api_user` e o volume `mysql_data` para persistência dos dados.

Antes de iniciar a API, crie as tabelas necessárias no banco:

```sql
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    curso VARCHAR(100) NOT NULL
);

CREATE TABLE professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    disciplina VARCHAR(100) NOT NULL
);
```

# 9. Execução do Projeto

```bash
npm run start:dev
```

Por padrão, o servidor fica disponível em `http://localhost:3000`. Por padrão, o servidor fica disponível em http://localhost:3000. Para usar outra porta, defina a variável de ambiente PORT antes de iniciar a aplicação.

> Antes de iniciar, confirme que o banco MySQL está em execução e que as tabelas `alunos` e `professores` já foram criadas.

# 10. Endpoints da API

## Alunos

| Método | Endpoint      | Descrição                     |
| ------ | ------------- | ----------------------------- |
| GET    | `/alunos`     | Lista todos os alunos         |
| GET    | `/alunos/:id` | Busca um aluno pelo ID        |
| POST   | `/alunos`     | Cadastra um aluno             |
| PUT    | `/alunos/:id` | Atualiza os dados de um aluno |
| DELETE | `/alunos/:id` | Remove um aluno               |

## Professores

| Método | Endpoint           | Descrição                         |
| ------ | ------------------ | --------------------------------- |
| GET    | `/professores`     | Lista todos os professores        |
| GET    | `/professores/:id` | Busca um professor pelo ID        |
| POST   | `/professores`     | Cadastra um professor             |
| PUT    | `/professores/:id` | Atualiza os dados de um professor |
| DELETE | `/professores/:id` | Remove um professor               |

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
  "curso": "ADS"
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
  "disciplina": "Banco de Dados"
}
```

## Atualização de aluno

```http
PUT /alunos/1
Content-Type: application/json
```

```json
{
  "nome": "Ana Silva",
  "email": "ana.silva@email.com",
  "curso": "Engenharia de Software"
}
```

Para consultar ou remover, use `GET /alunos/1` ou `DELETE /alunos/1`. As rotas de professores seguem o mesmo padrão, usando `/professores` e o campo `disciplina`.

# 12. Modelo de Dados

A API trabalha com as entidades `Aluno` e `Professor`:

```
Aluno  
├── id  
├── nome  
├── email  
└── curso
```

```
Professor  
├── id  
├── nome  
└── disciplina
```

**Estrutura das entidades:**

Aluno:
- `id`: identificador numérico;
- `nome`: nome do aluno;
- `email`: e-mail do aluno;
- `curso`: curso do aluno.  
  
Professor:
- `id`: identificador numérico;
- `nome`: nome do professor;
- `disciplina`: disciplina ministrada.

# 13. Autor

**Nome:** Lara Peddinghausen  
**Turma:** ADS 2024.2N  
**Unidade Curricular:** Programação Web 2  

# 14. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos e de aprendizado na disciplina de Programação Web 2. O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.
