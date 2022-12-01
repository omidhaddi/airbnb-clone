import reservationController from "../../controllers/reservationController"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const reservation = await reservationController.create(req.body)
    res.status(200).redirect(`/rooms/${reservation.room_id}/reservations`)
  }

  return res.status(400).json({ msg: "incorrect method"})
}