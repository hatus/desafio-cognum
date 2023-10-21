import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'

import { router } from './http/router'
import { AppError } from '@/errors/AppError'

const app = express()

app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  })
})

export { app }
