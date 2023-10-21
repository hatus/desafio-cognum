import { EmployeesRepository } from '@/repositories/employees-repository'
import { AppError } from '@/errors/AppError'

interface UpdateEmployeeByIdRequest {
  id: string
  name: string
}

export class UpdateEmployeeByIdUseCase {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({ id, name }: UpdateEmployeeByIdRequest): Promise<void> {
    const employee = await this.employeesRepository.findById(id)

    if (!employee) {
      throw new AppError('Employee not found', 404)
    }

    await this.employeesRepository.updateById(id, name)
  }
}
