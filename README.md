# Desafio Cognum

## Desafio 03

### Objetivo

- Integração com uma API desconhecida e avaliação de leitura em inglês.

### Informações Adicionais

- Servidor inicializa na porta **3000**
- O banco de dados escolhido foi o **PostgreSQL** e está hospedado em **render.com**
- Foi utilizado o **PrismaORM** como ORM

### Instalação

- Alterar para a branch do **desafio-03** com o comando:

  ```bash
  git switch desafio-03
  ```

- Fazer a instalação dos módulos nodejs com o comando:

  ```bash
  npm install
  ```

- Gerar o **prisma client** com o comando:

  ```bash
  npm run prisma:generate
  ```

### Inicializando o projeto

- Para inicializar o projeto, executar o comando:

  ```bash
  npm run dev
  ```

  - Os dados do banco de dados PostgreSQL estão no arquivo `.env`

### Rotas do projeto

- Popula o banco de dados com 10 usuário aleatórios:

  - Rota
    ```
    GET /employees/populate
    ```

- Cadastro de Employee

  - Rota
    ```
    POST /employees
    ```
  - Request Body

    ```
    {
    	"name":"John Doe",
    	"role":"ADMIN"
    }
    ```

    - `role` pode ser apenas `"ADMIN"` ou `"MEMBER"`

- Lista todos os Employees

  - Rota
    ```
    GET /employees
    ```

- Lista um employee por id

  - Rota
    ```
    GET /employees/:id
    ```

- Atualiza um Employee

  - Rota
    ```
    PATCH /employees/:id
    ```
  - Request Body

    ```
    {
    	"name":"John Doe",
    }
    ```

    - Atualiza apenas o nome do Employee

- Apaga um Employee

  - Rota
    ```
    DELETE /employees/:id
    ```
