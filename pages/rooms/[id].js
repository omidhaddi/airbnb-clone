//we can add booking here 
import styles from '../../styles/Home.module.css'
import roomsController from "../../controllers/roomController"
import Navbar from "../../components/Navbar"
export default function Home({ room }) {

    return (
        <>
            <Navbar></Navbar>
            <h1></h1>
            <div className={styles.container}>
                <h1>{room.room_type}</h1>
                {room.ImageUrl}
                <h3>number_ofPersons={room.number_ofPersons}</h3>
                <h3>Number of bedrooms = {room.total_bedrooms}</h3>
                <h3>Number of bathrooms = {room.total_bathrooms}</h3>
                <h3>{room.owner_id}</h3>
                <h3>Price ={room.price}</h3>
                <h3>{room.published_at}</h3>
            </div>
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