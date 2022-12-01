import db from '../database'

const roomController = {
  all: async () => {
    const rooms = await db.Room.findAll()
    const parsedRoom = JSON.parse(JSON.stringify(rooms))
    return parsedRoom
  },
  find: async (id) => {
    const room = await db.Room.findByPk(id)
    const parsedRooms = JSON.parse(JSON.stringify(room))
    return parsedRooms
  },
  associate: async (id, user) => {
    const room = await db.Room.findByPk(id)
    user.addRooms(room)
    room.setUsers(user)
  },
  create: async (data) => {
    const room = await db.Room.create(data)
    return JSON.parse(JSON.stringify(room))
  }
}

export default roomController