import { z } from 'zod'
import { Response } from 'express'

import { makeDeleteEmployeeByIdUseCase } from '@/use-cases/factories/make-delete-employee-by-id-use-case'

export class DeleteEmployeeByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateEmployeeByIdParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = updateEmployeeByIdParamsSchema.parse(req.params)

    const deleteEmployeeByIdUseCase = makeDeleteEmployeeByIdUseCase()

    await deleteEmployeeByIdUseCase.execute({ id })

    return res.status(204).send()
  }
}
