import { z } from 'zod'
import { Response } from 'express'
import { makeUpdateEmployeeByIdUseCase } from '@/use-cases/factories/make-update-employee-by-id-use-case'

export class UpdateEmployeeByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateEmployeeByIdParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const updateEmployeeByIdBodySchema = z.object({
      name: z.string(),
    })

    const { id } = updateEmployeeByIdParamsSchema.parse(req.params)
    const { name } = updateEmployeeByIdBodySchema.parse(req.body)

    const updateEmployeeByIdUseCase = makeUpdateEmployeeByIdUseCase()

    await updateEmployeeByIdUseCase.execute({ id, name })

    return res.status(204).send()
  }
}
