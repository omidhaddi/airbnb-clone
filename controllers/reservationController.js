import db from '../database'
import { Op } from 'sequelize';

const reservationsController = {
    create: async (data) => {
        console.log(data)
        const startDate = new Date(data.start_date);
        const endDate = new Date(data.end_date);
        /* avoid booking overlapping
        1. booking starting in other booking
          startDate <= startBooking &&  endDate >= startBooking
        2. booking ending in other booking
          startDate <= endBooking &&  endDate >= endBooking
        3. booking range including pre-existing one
          startDate >= startBooking && endDate <= endBooking 
        */
        const existingReservation = await db.Reservation.findOne({
            where: {
                [Op.and]: [
                    { room_id: data.room_id },
                    {
                        [Op.or]: [
                            {
                                [Op.and]: [
                                    { start_date: { [Op.lte]: startDate } },
                                    { end_date: { [Op.gte]: startDate } }
                                ]
                            },
                            {
                                [Op.and]: [
                                    { start_date: { [Op.lte]: endDate } },
                                    { end_date: { [Op.gte]: endDate } },
                                ]
                            },
                            {
                                [Op.and]: [
                                    { start_date: { [Op.gte]: startDate } },
                                    { end_date: { [Op.lte]: endDate } }
                                ]
                            }
                        ]
                    }
                ]
            }
        })



        if (existingReservation) {

            return null
        }

        return await db.Reservation.create(data)
    },
    allFromRoomId: async (room_id) => {
        const reservation = await db.Reservation.findAll({ where: { room_id } })
        return JSON.parse(JSON.stringify(reservation))
    }

}

export default reservationsController