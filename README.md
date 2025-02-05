# API de Gerenciamento de Lista de Tarefas

### Descrição
Esta é uma API RESTful desenvolvida com Node.js, Express.js, Sequelize e PostgreSQL para gerenciar uma lista de tarefas. A aplicação permite realizar operações CRUD (“Create, Read, Update, Delete”) em uma lista de tarefas, seguindo os princípios RESTful.

### Funcionalidades
A API permite:

1. Criar uma nova tarefa:
- Uma tarefa tem título, descrição (opcional) e um status (pendente ou concluída).
2. Listar todas as tarefas:
- Busca de todas as tarefas cadastradas.
3. Buscar uma tarefa específica:
- Busca por ID.
4. Atualizar uma tarefa:
- Atualização do título, descrição e status.
5. Remover uma tarefa:
- Deleção de uma tarefa pelo ID.

### Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **Sequelize** (ORM)
- **PostgreSQL** (Banco de dados relacional)

### Requisitos
- Node.js 14+
- PostgreSQL instalado e configurado.
- Criar uma base de dados chamada 'todo-list' no banco de dados PostgreSQL.

### Instruções para Execução
1. Clone o repositório:
```bash
git clone https://github.com/rodrigoaguerra/todo-list.git
cd todo-list
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```bash
# NODE
PORT=porta_da_aplicacao

# POSTGRESQL
DB_HOST=seu_host
DB_PORT=porta_do_banco_de_dados
DB_NAME=todo_list # alterar para nome da base de dados que você criou no banco de dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```
obs: caso você troque a porta da aplicação será necessário atualizar a variável de ambiente 'api_url' no POSTMAN.

4. Inicie o servidor:
```bash
npm start
```
A API estará disponível em http://localhost:3000 ou na porta que você configurou no arquivo .env.
