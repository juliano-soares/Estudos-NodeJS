import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.routes';
import statusRoute from './routes/status.routes';
import usersRoute from './routes/users.routes';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(statusRoute);
app.use(usersRoute);
app.use(authorizationRoute);

// Configuração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});