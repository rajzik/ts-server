import { TodoDatabase } from '../database';

import { Router, Request, Response } from 'express';

interface ITodo {
  _id: string;
  text: string;
  done: boolean;
}

export async function init() {
  await TodoDatabase.loadDatabaseAsync();
}

const router = Router();

router.get('/todo', async (_: Request, res: Response) => {
  res.json(await TodoDatabase.findAsync({}));
});

router.post('/todo', async (req: Request, res: Response) => {
  res.json(await TodoDatabase.insertAsync(req.body));
});

router.put('/todo/:id', async (req: Request, res: Response) => {
  const _id = req.params.id;

  try {
    await TodoDatabase.updateAsync({ _id }, req.body, {});
    res.json((await TodoDatabase.findAsync({ _id }))[0]);
  } catch (e) {
    res.status(400);
  }
});

router.patch('/todo/:id', async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const todo: ITodo[] = await TodoDatabase.findAsync({ _id });
    await TodoDatabase.updateAsync({ _id }, { $set: { done: !todo[0].done} }, {});
    if (todo[0]) {
      res.json((await TodoDatabase.findAsync({ _id }))[0]);
    } else {
      res.status(404);
    }
  } catch (e) {
    res.status(400);
  }
});

export { router };
