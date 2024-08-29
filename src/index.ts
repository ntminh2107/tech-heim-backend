import express from 'express'
import { query } from './db/query'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello, Docker with Express and PostgreSQL!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

query()
