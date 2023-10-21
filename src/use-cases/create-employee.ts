import { Employee } from '@prisma/client'

import { EmployeesRepository } from '@/repositories/employees-repository'

interface CreateEmployeeRequest {
  name: string
  role?: 'ADMIN' | 'MEMBER'
}

interface CreateEmployeeResponse {
  employee: Employee
}

export class CreateEmployeeUseCase {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({
    name,
    role,
  }: CreateEmployeeRequest): Promise<CreateEmployeeResponse> {
    const employee = await this.employeesRepository.create({
      name,
      role,
    })

    return { employee }
  }
}
