import express from 'express'
import { Client } from 'pg'

const app = express()
const port = 3000

const client = new Client({
  host: 'postgres',
  user: 'postgres',
  password: '21072002',
  database: 'postgres'
})

client
  .connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Connection error', err.stack))

app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello, Docker with Express and PostgreSQL!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
