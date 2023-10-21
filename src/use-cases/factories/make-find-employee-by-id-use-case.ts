import { PrismaEmployessRepository } from '@/repositories/prisma/prisma-employees-repository'
import { FindEmployeeByIdUseCase } from '../find-employee-by-id'

export function makeFindEmployeeByIdUseCase() {
  const employeesRepository = new PrismaEmployessRepository()
  const useCase = new FindEmployeeByIdUseCase(employeesRepository)

  return useCase
}
