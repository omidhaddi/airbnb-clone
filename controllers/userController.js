import db from "../database"

const userController = {
  all: async () => {
    const users = await db.User.findAll()
    const parsedUsers = JSON.parse(JSON.stringify(users))
    return parsedUsers
  },
  find: async (id) => {
    return await db.User.findByPk(id)
  }
}

export default userController





