import express from 'express'

const app = express()

app.use('/', (req, res) => {
  return res.json({ message: 'hello, world' })
})

export { app }
