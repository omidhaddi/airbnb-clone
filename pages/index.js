// import Link from "next/link"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import roomController from "../controllers/roomController"
import styles from "../styles/Home.module.css"

export default function Home({ rooms }) {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container2}>
        {rooms.map(room => (<Card key={room.id} room={room}> {room.imageUrl} {room.room_type} {room.total_bedrooms} {room.price} </Card>))}
      </div>

    </>
  )
}

export async function getServerSideProps(req, res) {
  const rooms = await roomController.all()
  return {
    props: { rooms }
  }
}

