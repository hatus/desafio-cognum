import { z } from 'zod'
import { Response } from 'express'
import { makeCreateEmployeeUseCase } from '@/use-cases/factories/make-create-employee-use-case'

export class CreateEmployeeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createEmployeeBodySchema = z.object({
      name: z.string({ required_error: 'Employee Name Required.' }),
      role: z.enum(['MEMBER', 'ADMIN']).default('MEMBER'),
    })

    const { name, role } = createEmployeeBodySchema.parse(req.body)

    const createEmployeeUseCase = makeCreateEmployeeUseCase()

    await createEmployeeUseCase.execute({ name, role })

    return res.status(201).send()
  }
}
