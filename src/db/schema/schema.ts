import { table } from 'console'
import { serial } from 'drizzle-orm/pg-core'
import { index } from 'drizzle-orm/pg-core'
import { uuid } from 'drizzle-orm/pg-core'
import { primaryKey } from 'drizzle-orm/pg-core'
import { boolean } from 'drizzle-orm/pg-core'
import { unique } from 'drizzle-orm/pg-core'
import { pgEnum } from 'drizzle-orm/pg-core'
import { timestamp } from 'drizzle-orm/pg-core'
import { varchar } from 'drizzle-orm/pg-core'
import { pgTable, text } from 'drizzle-orm/pg-core'

export const UserRole = pgEnum('userRole', ['ADMIN', 'CUSTOMER'])

export const tblUsers = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    phone: varchar('phone', { length: 20 }),
    role: UserRole('userRole').default('CUSTOMER').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
  },
  (table) => {
    return {
      emailIndex: index('emailIndex').on(table.email),
      uniqueName: unique('uniqueName').on(table.name)
    }
  }
)

export const tblUserPreferences = pgTable('userPreferences', {
  id: uuid('id').primaryKey().defaultRandom(),
  emailUpdates: boolean('emailUpdates').notNull().default(false),
  userId: uuid('userId').references(() => tblUsers.id) /*foreign key relationship with tblUser */
})

export const tblBlogPost = pgTable('blogPost', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 255 }).notNull(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
  author: varchar('author', { length: 255 }).notNull(),
  read_time: varchar('read_time', { length: 255 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  content: text('content').notNull()
})

export const tblCategory = pgTable('category', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull()
})

export const tblPostCategory = pgTable(
  'postCategory',
  {
    postId: uuid('postId')
      .references(() => tblBlogPost.id)
      .notNull(),
    categoryId: uuid('categoryId')
      .references(() => tblCategory.id)
      .notNull()
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.postId, table.categoryId] })
    }
  }
)
