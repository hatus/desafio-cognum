import { Response } from 'express'

import { randomUserApi } from '@/lib/randomUserApi'
import { makeCreateEmployeeUseCase } from '@/use-cases/factories/make-create-employee-use-case'

type RandomUserData = {
  results: Array<{
    name: {
      title: string
      first: string
      last: string
    }
  }>
}

export class PopulateController {
  async handle(req: Request, res: Response) {
    const createEmployeeUseCase = makeCreateEmployeeUseCase()

    const randomUserData = await randomUserApi.get<RandomUserData>(
      '/?results=10&inc=name&noinfo',
    )

    const randomCreatedUsers = await Promise.all(
      randomUserData.data.results.map(async user => {
        const userName = user.name.first + ' ' + user.name.last

        const createdUser = await createEmployeeUseCase.execute({
          name: userName,
        })

        return createdUser
      }),
    )

    return res.status(201).json({ results: randomCreatedUsers })
  }
}
