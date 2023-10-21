import { CreateEmployeeUseCase } from '../create-employee'
import { PrismaEmployessRepository } from '@/repositories/prisma/prisma-employees-repository'

export function makeCreateEmployeeUseCase() {
  const employessRepository = new PrismaEmployessRepository()
  const useCase = new CreateEmployeeUseCase(employessRepository)

  return useCase
}
