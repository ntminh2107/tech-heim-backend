import { serial } from 'drizzle-orm/pg-core'
import { timestamp } from 'drizzle-orm/pg-core'
import { varchar } from 'drizzle-orm/pg-core'
import { pgTable, text } from 'drizzle-orm/pg-core'

export const tblUsers = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: varchar('phone', { length: 20 }),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow()
})
