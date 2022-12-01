import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Component({ room }) {
  return (
    <>
      <Link href={`rooms/${room.id}`}>
        <div className={styles.card}>
          <Image
            src={room.imageUrl}
            alt="flats"
            width={250}
            height={350}
          ></Image>
          <h3>
            {room.room_type} in {room.country}
          </h3>
          <p>With {room.total_bedrooms} bed rooms</p>
          <p>{room.price} € per night</p>
        </div>
      </Link>
    </>
  );
}
