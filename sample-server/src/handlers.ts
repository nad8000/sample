import { Request, Response } from 'express';

export const rootHandler = (req: Request, res: Response) => {
  res.send('Hello World! sample server!');
};

export const sampleHandler = (req: Request, res: Response) => {
  res.send('Hello World! sample page!');
};