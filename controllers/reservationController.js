import db from "../database/index"
import { Op } from "sequelize";
const reservationController = {
    create: async (data) => {
      console.log(data)
      const startBooking = new Date(data.start_Date);
      const endBooking = new Date(data.end_date);
      const existingReservation = await db.Reservation.findOne({
        where: {
          [Op.and]: [
            { room_id: data.room_id },
            {
              [Op.or]: [
                {
                  [Op.and]: [
                    { start_date: { [Op.lte]: startBooking } },
                    { end_date: { [Op.gte]: startBooking } }
                  ]
                },
                {
                  [Op.and]: [
                    { start_date: { [Op.lte]: endBooking } },
                    { end_date: { [Op.gte]: endBooking } },
                  ]
                },
                {
                  [Op.and]: [
                    { start_date: {[Op.gte]: startBooking } },
                    { end_date: {[Op.lte]: endBooking } }
                  ]
                }
              ]
            }
          ]
        }
      })
  
      console.log(existingReservation)
      
      if (existingReservation) {
        return "error"
      }
      
      return await db.Reservation.create(data)
    }
  }
  export default reservationController