import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: './src/db/schema/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.POSTGRES_HOST ?? '',
    port: Number(process.env.POSTGRES_PORT ?? 0),
    user: process.env.POSTGRES_USER ?? '',
    password: process.env.POSTGRES_PASSWORD ?? '',
    database: process.env.POSTGRES_DB ?? '',
    ssl: false
  },
  verbose: true,
  strict: true
})
