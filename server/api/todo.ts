import { TodoDatabase } from '../database';
import { Context } from 'server/typings/common';
import { status } from 'server/reply';

export async function init() {
  await TodoDatabase.loadDatabaseAsync();

}


export async function getTodo(data: Context) {
  const a = await TodoDatabase.findAsync({_id: data.params.id});
  if (a.length > 0) return a[0];
  return status(404).send("Not Found!");
}

export async function getAllTodos() {
  return await TodoDatabase.findAsync({});
}
