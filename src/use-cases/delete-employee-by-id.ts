import { AppError } from '@/errors/AppError'
import { EmployeesRepository } from '@/repositories/employees-repository'

interface DeleteEmployeeByIdRequest {
  id: string
}

export class DeleteEmployeeByIdUseCase {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({ id }: DeleteEmployeeByIdRequest): Promise<void> {
    const employee = await this.employeesRepository.findById(id)

    if (!employee) {
      throw new AppError('Employee not found', 404)
    }

    await this.employeesRepository.deleteById(id)
  }
}
