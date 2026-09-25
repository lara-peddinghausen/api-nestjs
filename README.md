# API REST com NestJS

**API REST para gestão de alunos e professores**

API desenvolvida com NestJS e TypeScript para cadastrar, consultar, atualizar e excluir alunos e professores por meio de endpoints HTTP. Os registros são mantidos em memória durante a execução da aplicação.

# 1. Descrição

O projeto demonstra a construção de uma API REST usando **Node.js**, **NestJS** e **TypeScript**. A aplicação organiza as funcionalidades em módulos, controllers e services, e utiliza respostas JSON para operações de CRUD.

> Os dados são armazenados somente na memória da aplicação. Ao reiniciar o servidor, as alterações realizadas são perdidas.

# 2. Funcionalidades

- Cadastro de alunos e professores;
- Listagem de todos os alunos e professores;
- Consulta de um registro pelo ID;
- Atualização de dados pelo ID;
- Exclusão pelo ID;

# 3. Tecnologias Utilizadas

- Node.js;
- NestJS;
- TypeScript;
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
│   │   └── alunos.service.ts
│   ├── professores/
│   │   ├── professores.controller.ts
│   │   ├── professores.module.ts
│   │   └── professores.service.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── vitest.config.ts
```

Descrição resumida:

- `src/main.ts` — inicializa a aplicação e inicia o servidor;
- `src/app.module.ts` — módulo raiz que importa os módulos de alunos e professores;
- `src/alunos/alunos.controller.ts` — define as rotas HTTP de alunos;
- `src/alunos/alunos.service.ts` — implementa as operações de alunos e mantém os dados em memória;
- `src/professores/professores.controller.ts` — define as rotas HTTP de professores;
- `src/professores/professores.service.ts` — implementa as operações de professores e mantém os dados em memória;
- `package.json` — define as dependências e os comandos do projeto.

# 5. Pré-requisitos

- Node.js;
- npm;
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

# 7. Execução do Projeto

```bash
npm run start:dev
```

Por padrão, o servidor fica disponível em `http://localhost:3000`. Para usar outra porta, defina a variável de ambiente `PORT` antes de iniciar a aplicação.

# 8. Endpoints da API

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

# 9. Exemplos de Requisição

## Cadastro de aluno

```http
POST /alunos
Content-Type: application/json
```

```json
{
  "nome": "Ana",
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
  "curso": "Engenharia de Software"
}
```

Para consultar ou remover, use `GET /alunos/1` ou `DELETE /alunos/1`. As rotas de professores seguem o mesmo padrão, usando `/professores` e o campo `disciplina`.

# 10. Modelo de Dados

A API trabalha com as entidades `Aluno` e `Professor`:

```
Aluno  
├── id  
├── nome  
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
- `curso`: curso do aluno.  
  
Professor:
- `id`: identificador numérico;
- `nome`: nome do professor;
- `disciplina`: disciplina ministrada.

# 11. Autor

**Nome:** Lara Peddinghausen
**Turma:** ADS 2024.2N
**Unidade Curricular:** Programação Web 2

# 12. Licença e Uso Acadêmico

Projeto desenvolvido para fins acadêmicos e de aprendizado na disciplina de Programação Web 2. O código poderá ser utilizado para avaliação e acompanhamento acadêmico durante o curso.
