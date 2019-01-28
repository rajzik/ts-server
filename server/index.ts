import server from 'server';
import { get } from 'server/router';
import { TodoApi } from './api';
import { Context } from 'server/typings/common';


TodoApi.init();

server({ port: 5555 },
  get('/todo', async () => await TodoApi.getAllTodos()),
  get('/todo/:id', async (data: Context) => await TodoApi.getTodo(data))
);