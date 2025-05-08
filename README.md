# Gerenciador de Tarefas - Projeto Acadêmico

Este é um projeto acadêmico desenvolvido para fins de estudo na área de **Análise e Desenvolvimento de Sistemas**. O objetivo é criar um gerenciador de tarefas simples, com funcionalidades de CRUD (criar, editar, excluir, listar) para tarefas associadas a um usuário específico, com autenticação via ID.

## Funcionalidades

- **Criar Usuário**: Permite criar um novo usuário, com nome e sobrenome.
- **Login por ID**: Permite que um usuário se autentique através de um ID único.
- **Criar Tarefa**: O usuário pode criar tarefas com título, descrição e tipo (Pessoal ou Profissional).
- **Listar Tarefas**: Exibe as tarefas associadas ao usuário logado.
- **Editar Tarefa**: Permite editar as tarefas existentes.
- **Excluir Tarefa**: Permite excluir tarefas.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### Backend

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js para facilitar a criação de APIs RESTful.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar dados de usuários e tarefas.
- **Sequelize**: ORM para Node.js que facilita a comunicação com o banco de dados PostgreSQL.
- **Zod**: Biblioteca de validação de dados para garantir a integridade e segurança das requisições.
- **Dotenv**: Utilizado para carregar variáveis de ambiente em arquivos `.env`.
- **CORS**: Middleware para permitir que o backend aceite requisições de diferentes origens (Cross-Origin Resource Sharing).

### Frontend

- **HTML**: Estrutura da página web.
- **CSS**: Estilização do layout utilizando estilos personalizados.
- **JavaScript**: Lógica para interação com a API e manipulação da interface do usuário.
- **Fetch API**: Para comunicação com a API RESTful backend.

## API

A API é responsável por fornecer os dados das tarefas e usuários. Ela permite as operações de CRUD para usuários e tarefas.

### Endpoints

- **POST /users**: Cria um novo usuário.
- **POST /tasks**: Cria uma nova tarefa.
- **GET /tasks**: Retorna todas as tarefas.
- **PUT /tasks/:id**: Atualiza uma tarefa existente.
- **DELETE /tasks/:id**: Exclui uma tarefa.

## Configuração Técnica

### Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL
- API configurada em um servidor local, como o Express.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git
   cd gerenciador-de-tarefas
