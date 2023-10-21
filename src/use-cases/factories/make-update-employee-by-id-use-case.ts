import { PrismaEmployessRepository } from '@/repositories/prisma/prisma-employees-repository'
import { UpdateEmployeeByIdUseCase } from '../update-employee-by-id'

export function makeUpdateEmployeeByIdUseCase() {
  const employeesRepository = new PrismaEmployessRepository()
  const useCase = new UpdateEmployeeByIdUseCase(employeesRepository)

  return useCase
}
