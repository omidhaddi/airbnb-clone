
import db from '../database'

const roomController = {
  all: async () => {
    const rooms = await db.Rooms.findAll()
    const parsedRooms = JSON.parse(JSON.stringify(rooms))
    return parsedRooms
  },
  find: async (id) => {
    const room = await db.Rooms.findByPk(id)
    const parsedRooms = JSON.parse(JSON.stringify(room))
    return parsedRooms
  },
  associate: async (id, user) => {
    const room = await db.Rooms.findByPk(id)
    user.addRooms(room)
    room.setUsers(user)
  },
  create: async (data) => {
    const room = await db.Rooms.create(data)
    return JSON.parse(JSON.stringify(room))
  }
}

export default roomController