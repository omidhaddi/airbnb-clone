// for add new flats
import styles from '../../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../../components/Navbar'
// import { getSession } from 'next-auth/react'
// import userController from '../../controllers/user'
import ImageUpload from '../../components/ImageUpload';
// import db from '../../database'



export default function NewFlat(currentUser) {
    return (
        <>
            <Navbar currentUser={currentUser}></Navbar>
            <h1 className={styles.headText}>Add new Flat</h1>
            <div className={styles.form}>
                <form action='/api/flats' method="POST">
                    <label htmlFor="room_type" className="form-label">Flat Taype</label><br />
                    <input className="form-control form-control-sm" type="text" id="room_type" name="room_type" /><br />
                    <label htmlFor="numberof_persons" className="form-label">Number of Persons</label><br />
                    <input className="form-control form-control-sm" type="integer" id="numberof_persons" name="numberof_persons" /><br /><br />
                    <label htmlFor="total_bedrooms" className="form-label">Total Bed Rooms</label><br />
                    <input className="form-control form-control-sm" type="integer" id="total_bedrooms" name="total_bedrooms" /><br /><br />
                    <label htmlFor="total_bathrooms" className="form-label">Total Bath Rooms</label><br />
                    <input className="form-control form-control-sm" type="integer" id="total_bathrooms" name="total_bathrooms" /><br /><br />
                    <label htmlFor="price" className="form-label">Price</label><br />
                    <input className="form-control form-control-sm" type="integer" id="price" name="price" /><br /><br />
                    <ImageUpload></ImageUpload>
                    <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                </form>
            </div>
            <button className="f19g2zq0 dir dir-ltr" type='button'>
                <div className="f1xx50dm dir dir-ltr" id="littleSearchLabel">Start Your Search</div>
                <div className="s1qcpybl dir dir-ltr" data-icon="true" data-testid="little-search-icon">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: 12, width: 12, stroke: 'currentcolor', strokeWidth: 5.33333, overflow: 'visible'}}>
                        <g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                        </g>
                    </svg>
                </div>
            </button>
        </>
    )
}
// export async function getServerSideProps(req, res) {
//     const session = await getSession(req)
//     let currentUser = null
//     if (session) {
//         // currentUser = await userController.findEmail(session.user.email)  // we have define findEmail in userController
//         const currentUser = await db.User.findOne({ where: { email: User.email } })
//         return JSON.parse(JSON.stringify(currentUser))
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