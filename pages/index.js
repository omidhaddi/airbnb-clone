
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import roomController from "../controllers/roomController"
import styles from "../styles/Home.module.css"
import Head from 'next/head'


export default function Home({ rooms }) {
 
  return (
    <>
      <Head>
        <title>Airbnb-clone</title>
      </Head>
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

