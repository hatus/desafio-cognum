import { Router } from 'express'

import { CreateEmployeeController } from './create-employee'
import { FindEmployeeByIdController } from './find-employee-by-id'
import { ListAllEmployeesController } from './list-all-employees'
import { UpdateEmployeeByIdController } from './update-employee-by-id'
import { DeleteEmployeeByIdController } from './delete-employee-by-id'
import { PopulateController } from './populate'

const employeesRoutes = Router()

const createEmployeeController = new CreateEmployeeController()
const findEmployeeByIdController = new FindEmployeeByIdController()
const listAllEmployeesController = new ListAllEmployeesController()
const updateEmployeeByIdController = new UpdateEmployeeByIdController()
const deleteEmployeeByIdController = new DeleteEmployeeByIdController()
const populateController = new PopulateController()

employeesRoutes.post('/', createEmployeeController.handle)
employeesRoutes.get('/populate', populateController.handle)
employeesRoutes.get('/', listAllEmployeesController.handle)
employeesRoutes.get('/:id', findEmployeeByIdController.handle)
employeesRoutes.patch('/:id', updateEmployeeByIdController.handle)
employeesRoutes.delete('/:id', deleteEmployeeByIdController.handle)

export { employeesRoutes }
