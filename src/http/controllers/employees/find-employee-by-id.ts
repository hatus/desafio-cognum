import { z } from 'zod'
import { Response } from 'express'

import { makeFindEmployeeByIdUseCase } from '@/use-cases/factories/make-find-employee-by-id-use-case'

export class FindEmployeeByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const findEmployeeByIdParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = findEmployeeByIdParamsSchema.parse(req.params)

    const findEmployeeByIdUseCase = makeFindEmployeeByIdUseCase()

    const { employee } = await findEmployeeByIdUseCase.execute({ id })

    return res.status(200).json({ employee })
  }
}
