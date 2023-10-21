import { Response } from 'express'
import { makeListAllEmployeesIdUseCase } from '@/use-cases/factories/make-list-all-employees-use-case'

export class ListAllEmployeesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAllEmployeesIdUseCase = makeListAllEmployeesIdUseCase()

    const { employees } = await listAllEmployeesIdUseCase.execute()

    return res.status(200).json({ employees })
  }
}
