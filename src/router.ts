import { Router } from 'express'

import { helloCognumController } from './controllers/helloCognumController'

const router = Router()

router.get('/hello', helloCognumController)

export { router }
