import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).notNull(),
  email: text('email').notNull(),
  password: text('password').notNull()
})

// You can define more tables here...
