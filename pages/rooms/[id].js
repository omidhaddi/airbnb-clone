//we can add booking here 
import styles from '../../styles/Home.module.css'
import roomsController from "../../controllers/roomController"
import Navbar from "../../components/Navbar"
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.css";
import Reservation from '../../components/Reservation';




export default function Home({ room }) {

    return (
        <>
            <Navbar></Navbar>
            <h1>{room.room_type}</h1>
            <div className={styles.images}>
                <Image src={room.imageUrl} alt="flats" width={600} height={350} />
                <div className={styles.images2}>
                    <div className={styles.images3}>
                        <Image src={room.imageUrl} alt="flats" width={280} height={100} />
                        <Image src={room.imageUrl} alt="flats" width={280} height={100} />
                    </div>
                    <div className={styles.images3}>
                        <Image src={room.imageUrl} alt="flats" width={280} height={100} />
                        <Image src={room.imageUrl} alt="flats" width={280} height={100} />
                    </div>
                </div>

            </div>

            <div className={styles.roomDetils}>
                <h5>With beautiful view in {room.country} </h5>
                <h5>{room.number_ofPersons} guests, {room.total_bedrooms} bedrooms, {room.total_bathrooms} bath  </h5>
                <h5>{room.owner_id}</h5>
                <h5>Price {room.price} € per night</h5>
                <h5>Published at {room.createdAt}</h5>
            </div>

            <Reservation></Reservation>

        </>
    )
}
export async function getServerSideProps(req, res) {
    console.log(res);
    const id = req.query.id
    const room = await roomsController.find(id)
    return {
        // return the cocktail to the component
        props: { room },
    }
}

// 3 guests · 1 bedroom · 2 beds · 1 bath
const bookingsController = {
    create: async (data) => {
      console.log(data)
      const startBooking = new Date(data.startDate);
      const endBooking = new Date(data.endDate);
      /* avoid booking overlapping
      1. booking starting in other booking
        startDate <= startBooking &&  endDate >= startBooking
      2. booking ending in other booking
        startDate <= endBooking &&  endDate >= endBooking
      3. booking range including pre-existing one
        startDate >= startBooking && endDate <= endBooking 
      */
      const existingBooking = await db.Booking.findOne({
        where: {
          [Op.and]: [
            { spaceshipId: data.spaceshipId },
            {
              [Op.or]: [
                {
                  [Op.and]: [
                    { startDate: { [Op.lte]: startBooking } },
                    { endDate: { [Op.gte]: startBooking } }
                  ]
                },
                {
                  [Op.and]: [
                    { startDate: { [Op.lte]: endBooking } },
                    { endDate: { [Op.gte]: endBooking } },
                  ]
                },
                {
                  [Op.and]: [
                    { startDate: {[Op.gte]: startBooking } },
                    { endDate: {[Op.lte]: endBooking } }
                  ]
                }
              ]
            }
          ]
        }
      })
  
      console.log(existingBooking)
      
      if (existingBooking) {
        return "error"
      }
      
      return await db.Booking.create(data)
    }
  }