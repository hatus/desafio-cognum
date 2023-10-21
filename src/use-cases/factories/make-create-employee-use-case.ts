import { CreateEmployeeUseCase } from '../create-employee'
import { PrismaEmployessRepository } from '@/repositories/prisma/prisma-employees-repository'

export function makeCreateEmployeeUseCase() {
  const employeesRepository = new PrismaEmployessRepository()
  const useCase = new CreateEmployeeUseCase(employeesRepository)

  return useCase
}
