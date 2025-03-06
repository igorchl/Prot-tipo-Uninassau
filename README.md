# Gestão de Estoque

## Configuração do Banco de Dados PostgreSQL

1. **Instalar PostgreSQL:**
   - Baixe e instale o PostgreSQL a partir de [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

2. **Criar um Banco de Dados:**
   - Abra o `pgAdmin` e conecte-se ao servidor PostgreSQL.
   - Crie um novo banco de dados chamado `gestao_estoque`.

3. **Atualizar Configuração do Sequelize:**
   - No arquivo `src/database/config.ts`, atualize as credenciais do banco de dados:

     ```typescript
     import { Sequelize } from 'sequelize';

     const sequelize = new Sequelize('gestao_estoque', 'postgres', 'sua_senha_aqui', {
       host: 'localhost',
       dialect: 'postgres',
       port: 5432,
     });

     export default sequelize;
     ```

4. **Sincronizar o Banco de Dados:**
   - No terminal, execute o servidor para sincronizar o banco de dados:

     ```bash
     npx ts-node src/index.ts
     ```

## Executar o Projeto

1. **Instalar Dependências:**
   - Execute `npm install` para instalar todas as dependências.

2. **Iniciar o Servidor:**
   - Execute `npx ts-node src/index.ts` para iniciar o servidor.

3. **Acessar a Aplicação:**
   - Abra o navegador e acesse `http://localhost:3000/login` para ver a tela de login.
