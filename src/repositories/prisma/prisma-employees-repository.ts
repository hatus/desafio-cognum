import { Prisma, Employee } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { EmployeesRepository } from '../employees-repository'

export class PrismaEmployessRepository implements EmployeesRepository {
  async create(data: Prisma.EmployeeCreateInput) {
    const employee = await prisma.employee.create({
      data,
    })

    return employee
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await prisma.employee.findUnique({
      where: { id },
    })

    return employee
  }

  async findAll(): Promise<Employee[]> {
    const employees = await prisma.employee.findMany()
    return employees
  }

  async updateById(id: string, name: string): Promise<Employee> {
    const updatedEmployees = await prisma.employee.update({
      data: { name },
      where: { id },
    })

    return updatedEmployees
  }

  async deleteById(id: string): Promise<void> {
    await prisma.employee.delete({ where: { id } })
  }
}
