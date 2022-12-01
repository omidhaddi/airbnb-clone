import Link from "next/link"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import roomController from "../controllers/roomController"

export default function Home({rooms}) {
  console.log(rooms)
  return (
    <>
      <Navbar></Navbar>
      <h1></h1>
      {rooms.map(room => (<Card key={room.id} room={room}></Card>))}
      <Link href=""></Link>

    </>
  )
  }

  export async function getServerSideProps(req,res) {
    const rooms = await roomController.all()
    return {
      props : {rooms}
    }
  }