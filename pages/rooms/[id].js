//we can add booking here 
import roomsController from "/controller/roomsController"

const room = props => {
    const room = props.room
    return (
        <div className={styles.container}>
            <h1>{room.room_type}</h1>
            <h2>{room.number_ofPersons}</h2>
            <h2>{room.total_bedrooms}</h2>
            <h2>{room.total_bathrooms}</h2>
            <h2>{room.owner_id}</h2>
            <h2>{room.price}</h2>
            <h2>{room.published_at}</h2>
        </div>
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