import { TodoDatabase } from '../database';

import { Router, Request, Response } from 'express';



export async function init() {
  await TodoDatabase.loadDatabaseAsync();

}



const router = Router();

router.get('/todo', async (_: Request, res: Response) => {
  res.json(await TodoDatabase.findAsync({}));
})

router.post('/todo', async (req: Request, res: Response) => {
  console.log(req.body);
  res.json(await TodoDatabase.insertAsync(req.body));
})

export { router };
// export async function getTodo(data: Context) {
//   const a = await TodoDatabase.findAsync({ _id: data.params.id });
//   if (a.length > 0) return a[0];
//   return status(404).send("Not Found!");
// }

// export async function getAllTodos() {
//   return await TodoDatabase.findAsync({});
// }


// export async function addTodo(ctx: Context) {
//   const { data } = ctx;
//   return status(201).json(await TodoDatabase.insertAsync(data));
// }
