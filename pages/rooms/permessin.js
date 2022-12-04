import Image from 'next/image';
import { useSession } from 'next-auth/react'
import styles from '../../styles/Home.module.css'
import Navbar from '../../components/Navbar';
import Head from 'next/head';
import Link from 'next/link';

export default function NewFlat() {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    return (
        <>
            <Head>
                <title>Go-to-signin-Airbnb-clonee</title>
            </Head>
            <Navbar></Navbar>
            <main className={styles.main}>
                <div className={styles.user}>
                    {loading && <div className={styles.headText}>Loading...</div>}
                    {
                        session &&
                        <div className={styles.link}>
                            <h3 className={styles.headText}>You Are signin Please click </h3>
                            <Link href='/'>⬇︎⬇︎</Link>
                        </div>

                    }
                    {
                        !session &&
                        <>
                            <p className={styles.headText}>Please Sign in</p>
                            <Image src="https://res.cloudinary.com/dgxasrrac/image/upload/v1670057434/unsigned-uploads/2_guamyd.gif" alt="image" width={500} height={500} />

                        </>
                    }
                </div>
            </main>
        </>
    )
}