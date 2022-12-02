import reservationsController from "../../../controllers/reservationController"
import userController from "../../../controllers/userController"
import styles from "../../../styles/Home.module.css"
import Navbar from "../../../components/Navbar"




const Reservations = props => {
    return (
        <>
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
    const user = await userController.find(id)

    return {
        props: { reservations, user }
    }
}

export default Reservations

