import express from 'express';
import cors from 'cors';
import sequelize from './database.js';
import taskControllers from './controllers/taskControllers.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware para habilitar o CORS
app.use(cors("*"));

// Middleware para processar o corpo da solicitação JSON
app.use(express.json());

// Middleware para processar o corpo codificado por URL
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', taskControllers);

// Sincronizar modelo com banco de dados e iniciar servidor
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Servidor rodando em http://localhost:' + process.env.PORT);
  });
}).catch(error => {
  console.error('Erro ao conectar com o banco de dados:', error);
});