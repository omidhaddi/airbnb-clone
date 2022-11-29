import db from "../database/index"
const flatsController = {
 all: async() => db.flats.finadAll()
}
console.log(flatsController.all())
export default flatsController