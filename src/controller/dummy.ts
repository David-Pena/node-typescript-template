import { type Request, type Response } from 'express';
import { Dummy } from '../models/Dummy';

export const sayHi = async (req: Request, res: Response) => {
  // Here will go all validations for the incoming data,
  // if everything is okay, call the corresponding service
  // from the Model
  const { name } = req.query;

  const message = await new Dummy().getGreeting(name as string);

  res.status(200).json(message);
};
