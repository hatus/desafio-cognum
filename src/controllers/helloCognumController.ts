import { Request, Response } from 'express'

export function helloCognumController(req: Request, res: Response) {
  return res.status(200).json({ message: 'Hello, Cognum!' })
}
