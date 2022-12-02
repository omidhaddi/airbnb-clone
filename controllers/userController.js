import db from "../database"

const userController = {
  all: async () => {
    const users = await db.User.findAll()
    const parsedUsers = JSON.parse(JSON.stringify(users))
    return parsedUsers
  },
  find: async (id) => {
    const user = await db.User.findByPk(id)
    return JSON.parse(JSON.stringify(user))
  },
  authorize: async ({ username, password }) => {
    const user = await db.User.findOne({ where: { [Op.and]: [{ email: username }, { password: password }] } })
    return user
  },
  findEmail: async (email) => {
    const user = await db.User.findOne({ where: { email: email } })
    return JSON.parse(JSON.stringify(user))

  }
}

export default userController





