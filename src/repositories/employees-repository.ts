import { Prisma, Employee } from '@prisma/client'

export interface EmployeesRepository {
  create(data: Prisma.EmployeeCreateInput): Promise<Employee>
  findById(id: string): Promise<Employee | null>
  findAll(): Promise<Employee[]>
  updateById(id: string, name: string): Promise<Employee>
  deleteById(id: string): Promise<void>
}
