import { Employee } from '@prisma/client'

import { EmployeesRepository } from '@/repositories/employees-repository'
import { AppError } from '@/errors/AppError'

interface FindEmployeeByIdRequest {
  id: string
}

interface FindEmployeeByIdResponse {
  employee: Employee | null
}

export class FindEmployeeByIdUseCase {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({
    id,
  }: FindEmployeeByIdRequest): Promise<FindEmployeeByIdResponse> {
    const employee = await this.employeesRepository.findById(id)

    if (!employee) {
      throw new AppError('Employee not found', 404)
    }

    return { employee }
  }
}
