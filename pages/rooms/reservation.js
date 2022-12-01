import roomController from "../../controllers/roomController"
import userController from "../../controllers/userController"

const Reservations = props => {
    return (
        <>
            <ul>
                {props.reservations.map(reservation => <li key={reservation.id}>{props.user.email}: {reservation.start_date} | {reservation.end_date}</li>)}
            </ul>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const id = req.query.id
    const user = await userController.find(id)
    const reservations = (await roomController.find(id)).Reservations
    return {
        props: { reservations, user }
    }
}

export default Reservations