// src/db/drizzle.ts

import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'postgres',
  port: parseInt(process.env.POSTGRES_PORT as string, 10) || 5433,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '21072002',
  database: process.env.POSTGRES_DB || 'postgres'
})

export const db = drizzle(pool)
