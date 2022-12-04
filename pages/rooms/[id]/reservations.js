import reservationsController from "../../../controllers/reservationController"
import userController from "../../../controllers/userController"
import styles from "../../../styles/Home.module.css"
import Navbar from "../../../components/Navbar"
import Head from "next/head"
import { getSession } from "next-auth/react"





const Reservations = props => {
    return (
        <>
            <Head>
                <title>Reservation-list-Airbnb-clonee</title>
            </Head>
            <Navbar></Navbar>
            {<ol className={styles.list}>
                {props.reservations.map(reservation => <li key={reservation.id}> | Start Date: {reservation.start_date} | End Date: {reservation.end_date}</li>)}
            </ol>}
        </>
    )
}
export async function getServerSideProps(req, res) {
    const id = req.query.id
    const reservations = await reservationsController.allFromRoomId(id)
    const session = await getSession(req)
    let currentUser = null
    if (session) {
        currentUser = await userController.findEmail(session.user.email)
    }
    if (currentUser) {
        return {
            props: { currentUser, reservations },
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

