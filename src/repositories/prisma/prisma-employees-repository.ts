import { Prisma, Employee } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { EmployeesRepository } from '../employees-repository'

export class PrismaEmployessRepository implements EmployeesRepository {
  async create(data: Prisma.EmployeeCreateInput) {
    const user = await prisma.employee.create({
      data,
    })

    return user
  }

  async findById(id: string): Promise<Employee | null> {
    const user = await prisma.employee.findUnique({
      where: { id },
    })

    return user
  }
}
