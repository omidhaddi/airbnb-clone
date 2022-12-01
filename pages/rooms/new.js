// for add new flats
import styles from '../../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../../components/Navbar'
// import { getSession } from 'next-auth/react'
// import userController from '../../controllers/user'
import ImageUpload from '../../components/ImageUpload';
// import roomController from '../../controllers/roomController';



export default function NewFlat() {
    return (
        <>
            <Navbar></Navbar>
            <h1 className={styles.headText}>Add new Flat</h1>
            <div className={styles.form}>
                <form action='/api/rooms' method="POST">
                    <label htmlFor="room_type" className="form-label">Flat Taype</label><br />
                    <input className="form-control form-control-sm" type="text" id="room_type" name="room_type" />
                    <label htmlFor="number_ofPersons" className="form-label">Number of Persons</label>
                    <input className="form-control form-control-sm" type="integer" id="number_ofPersons" name="number_ofPersons" />
                    <label htmlFor="total_bedrooms" className="form-label">Total Bed Rooms</label>
                    <input className="form-control form-control-sm" type="integer" id="total_bedrooms" name="total_bedrooms" />
                    <label htmlFor="total_bathrooms" className="form-label">Total Bath Rooms</label>
                    <input className="form-control form-control-sm" type="integer" id="total_bathrooms" name="total_bathrooms" />
                    <label htmlFor="price" className="form-label">Price</label>
                    <input className="form-control form-control-sm" type="integer" id="price" name="price" />
                    <label htmlFor="address" className="form-label">Address</label>
                    <input className="form-control form-control-sm" type="text" id="address" name="address" />
                    <label htmlFor="country" className="form-label">Country</label>
                    <input className="form-control form-control-sm" type="text" id="country" name="country" />
                    
                    <ImageUpload></ImageUpload>
                    <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                </form>
            </div>

        </>
    )
}
// export async function getServerSideProps(req, res) {
//     const session = await getSession(req)
//     let currentUser = null
//     if (session) {
//         currentUser = await userController.findEmail(session.user.email)  // we have define findEmail in userController
     
//     }
//     if (currentUser) {
//         return {
//             props: { currentUser },
//         }
//     } else {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: `/flats`
//             }
//         }
//     }
// }