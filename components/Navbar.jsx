import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import logo from "./images/logo.png";
import Link from "next/link";

export default function Component() {
  return (
    <nav class="navbar bg-info bg-gradient">
      <div class="container-fluid">
        <Image src={logo} width={100} height={35} alt="airbnb logo"></Image>
        <Link href="/">Home</Link>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
        <Link href="/rooms/new">Add new Flat</Link>
        <a class="navbar-brand">Airbnb your home</a>
        <a class="nav-link" href="#">
          Login
        </a>
      </div>
    </nav>
  );
}
