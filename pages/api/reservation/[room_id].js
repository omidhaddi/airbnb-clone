import reservationsController from "../../../controllers/reservationController"

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { room_id } = req.query
        const { start_date, end_date, users } = req.body
        console.log(start_date, end_date, users, room_id);
        const reservation = await reservationsController.create({ start_date, end_date, users, room_id, user_id: 1 })
        console.log(reservation);
        if (reservation) {

            res.status(200).redirect(`/rooms/${reservation.room_id}/reservations`)
        } else {
            res.status(400).redirect(`/rooms/${room_id}`)
        }
    }

    return res.status(400).json({ msg: "incorrect method" })
}