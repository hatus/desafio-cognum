import { Prisma, Employee } from '@prisma/client'

export interface EmployeesRepository {
  create(data: Prisma.EmployeeCreateInput): Promise<Employee>
  findById(id: string): Promise<Employee | null>
}
