import { Router } from 'express'

import { CreateEmployeeController } from './create-employee'
import { FindEmployeeByIdController } from './find-employee-by-id'
import { ListAllEmployeesController } from './list-all-employees'

const employeesRoutes = Router()
const createEmployeeController = new CreateEmployeeController()
const findEmployeeByIdController = new FindEmployeeByIdController()
const listAllEmployeesController = new ListAllEmployeesController()

employeesRoutes.post('/', createEmployeeController.handle)
employeesRoutes.get('/:id', findEmployeeByIdController.handle)
employeesRoutes.get('/', listAllEmployeesController.handle)

export { employeesRoutes }
