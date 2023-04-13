import { Request, Response } from 'express';
import { fetchTags } from '../db';

export const rootHandler = (req: Request, res: Response) => {
  res.send('Hello World! sample server!');
};

export const sampleHandler = (req: Request, res: Response) => {
  const Tags = fetchTags();
  res.send(Tags);
};