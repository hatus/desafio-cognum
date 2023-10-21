import { Employee } from '@prisma/client'

import { EmployeesRepository } from '@/repositories/employees-repository'

interface ListAllEmployeesResponse {
  employees: Employee[] | null
}

export class ListAllEmployeesUseCase {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute(): Promise<ListAllEmployeesResponse> {
    const employees = await this.employeesRepository.findAll()

    return { employees }
  }
}
