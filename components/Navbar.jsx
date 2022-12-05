import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "./images/logo.png";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <nav class="navbar bg-info bg-gradient">
      <div class="container-fluid">
        <Image src={logo} width={100} height={35} alt="airbnb logo"></Image>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "blue",
          }}
        >
          Home
        </Link>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
        <Link
          href="/rooms/new"
          style={{
            textDecoration: "none",
            color: "blue",
          }}
        >
          Add new Flat
        </Link>
        <a class="navbar-brand">Airbnb your home</a>

        {session && (
          <button
            href="#"
            onClick={handleSignout}
            className="btn btn-outline-primary"
          >
            Sign out
          </button>
        )}
        {!session && (
          <button
            href="#"
            onClick={handleSignin}
            className="btn btn-outline-primary"
          >
            Sign in
          </button>
        )}

        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {session && (
            <Image
              src={session.user.image}
              alt="userImage"
              className={styles.avatar}
              width={30}
              height={30}
            />
          )}
          {!session && (
            <>
              <Image
                src="https://res.cloudinary.com/dgxasrrac/image/upload/v1670071268/unsigned-uploads/public_FILL0_wght400_GRAD0_opsz48_r7zfg1.png"
                alt="Image"
                className={styles.avatar}
                width={30}
                height={30}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
