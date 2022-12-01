import db from "../database/index"
const roomsController = {
 all: async() => db.rooms.finadAll()
}
console.log(roomsController.all())
export default roomsController