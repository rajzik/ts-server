import { AsyncNeDBDataStore } from './nedba-async';
const TodoDatabase = new AsyncNeDBDataStore("./users.db");

export {
  TodoDatabase
}