import roomController from "../../../controllers/roomController";

export default async function handler(req, res) {
  const { room_type, number_ofPersons, total_bedrooms, total_bathrooms, price  } = req.body
  const room = await roomController.create({
    room_type, number_ofPersons, total_bedrooms, total_bathrooms, price 
  })
  res.status(200).redirect(`/rooms/${room.id}`);
}
