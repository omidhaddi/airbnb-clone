import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Component() {
  return (
    <>
      <Link href=''>
        <div className={styles.card}>
          <Image
            src={''}
            alt="flats"
            width={250}
            height={350}
          ></Image>
          <h3>Apartement</h3>
          <p>200 $</p>
          <p>Published at 02/09/2022</p>
        </div>
      </Link>
    </>
  );
}