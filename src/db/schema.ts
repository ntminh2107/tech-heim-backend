import { timestamp } from 'drizzle-orm/pg-core'
import { serial, text, pgSchema } from 'drizzle-orm/pg-core'
import { db } from './drizzle'
export const mySchema = pgSchema('postgres')
export const colors = mySchema.enum('colors', ['red', 'green', 'blue'])

export const tblUsers = mySchema.table('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow()
})

const addUser = async () => {
  try {
    await db.insert(tblUsers).values({
      name: 'John Doe',
      email: 'ming@gmail.com',
      password: '123456',
      created_at: new Date('2024-08-28T10:00:00Z'),
      updated_at: new Date('2024-08-30T10:00:00Z')
    })
    console.log('User added successfully with specified timestamps.')
  } catch (err) {
    console.log(err)
  }
}

addUser()
