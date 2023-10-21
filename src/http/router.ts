import { Router } from 'express'

import { employeesRoutes } from './controllers/employees/routes'

const router = Router()

router.use('/employees', employeesRoutes)

export { router }
