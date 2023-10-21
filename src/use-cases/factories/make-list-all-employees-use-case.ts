import { PrismaEmployessRepository } from '@/repositories/prisma/prisma-employees-repository'
import { ListAllEmployeesUseCase } from '../list-all-employees'

export function makeListAllEmployeesIdUseCase() {
  const employeesRepository = new PrismaEmployessRepository()
  const useCase = new ListAllEmployeesUseCase(employeesRepository)

  return useCase
}
