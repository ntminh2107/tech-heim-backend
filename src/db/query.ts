import { db } from './drizzle'
import { tblUsers } from './schema/schema'

export const query = async () => {
  await db.insert(tblUsers).values({
    name: 'Nguyen tuan minh',
    email: 'abcdx@gmail.com',
    phone: '0123456789',
    created_at: new Date('2024-08-25T10:00:00Z'),
    updated_at: new Date('2024-08-28T10:00:00Z')
  })

  const user = await db.query.tblUsers.findFirst()
  console.log(user)
}
