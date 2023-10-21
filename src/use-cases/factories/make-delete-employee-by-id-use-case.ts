import { PrismaEmployessRepository } from '@/repositories/prisma/prisma-employees-repository'
import { DeleteEmployeeByIdUseCase } from '../delete-employee-by-id'

export function makeDeleteEmployeeByIdUseCase() {
  const employeesRepository = new PrismaEmployessRepository()
  const useCase = new DeleteEmployeeByIdUseCase(employeesRepository)

  return useCase
}
