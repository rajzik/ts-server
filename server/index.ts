import express from 'express';
import bodyParser from 'body-parser';

import { TodoApi } from './api';
import { router } from './api/todo';


TodoApi.init();

const app = express();

app.use(bodyParser.json(), router);

app.listen(5555);

// server({ port: 5555 },
//   get('/todo', TodoApi.getAllTodos),
//   post('/todo', TodoApi.addTodo),
//   get('/todo/:id', TodoApi.getTodo),
// );