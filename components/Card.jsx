import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Component({room}) {
  return (
    <>
      <Link href= {`rooms/${room.id}`}>
        <div className={styles.card}>
          <Image
            src={room.imageUrl}
            alt="flats"
            width={250}
            height={350}
          ></Image>
          <h3>{room.room_type}</h3>
          <p>{room.total_bedrooms}</p>
          <p>{room.price}</p>
        </div>
      </Link>
    </>
  );
}