import { z } from 'zod'
import { Response } from 'express'
import { makeFindEmployeeByIdUseCase } from '@/use-cases/factories/make-find-employee-by-id-use-case'

export class FindEmployeeByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const findEmployeeByIdUseCase = makeFindEmployeeByIdUseCase()

    const { employee } = await findEmployeeByIdUseCase.execute({ id })

    return res.status(201).json({ employee })
  }
}
