import reservationsController from "../../../controllers/reservationController"
import userController from "../../../controllers/userController"
import styles from "../../../styles/Home.module.css"
import Navbar from "../../../components/Navbar"
import Head from "next/head"
import { getSession } from "next-auth/react"
import roomController from "../../../controllers/roomController"
import Image from "next/image"

const Reservations = ({ reservations, room, currentUser }) => {
    return (
        <>
            <Head>
                <title>Reservation-list-Airbnb-clonee</title>
            </Head>
            <Navbar></Navbar>
            {<div>
                {reservations.map(reservation => <div key={reservation.id} className={styles.list}>  <Image src={room.imageUrl} height={200} width={200} alt="" /> --- Start Date: {reservation.start_date} | End Date: {reservation.end_date} <br /> --- {currentUser.name} <br /> --- {currentUser.email} </div>
                )}
            </div>}

        </>
    )
}
export async function getServerSideProps(req, res) {
    const id = req.query.id
    const room = await roomController.find(id)
    const reservations = await reservationsController.allFromRoomId(id)
    const session = await getSession(req)

    let currentUser = null
    if (session) {
        currentUser = await userController.findEmail(session.user.email)
    }
    if (currentUser) {
        return {
            props: { room, currentUser, reservations, session },
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: `/rooms/permessin`
            }
        }
    }

    // return {
    //     props: { reservations }
    // }
}




export default Reservations


