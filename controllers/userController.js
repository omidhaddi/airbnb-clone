import db from "../database"
const userController = {
  all: async () => {
    const users = await db.Users.findAll()
    const parsedUsers = JSON.parse(JSON.stringify(users))
    return parsedUsers
  },
  find: async (id) => {
    return await db.Users.findByPk(id)
  }
}

export default userController





