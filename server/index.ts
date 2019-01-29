import server from 'server';
import { get, post } from 'server/router';
import { TodoApi } from './api';
import { json, status } from 'server/reply';


TodoApi.init();

server({ port: 5555 },
  get('/', () => "hello world!"),
  get('/todo', async () => await TodoApi.getAllTodos()),
  post('/todo', ctx => json(ctx.data)),
  get('/todo/:id', async (data) => await TodoApi.getTodo(data)),
);