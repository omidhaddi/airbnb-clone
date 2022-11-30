import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import logo from "./images/logo.png";
import Link from "next/link";

export default function Component() {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <Image src={logo} width={100} height={35} alt="airbnb logo"></Image>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
        <a class="navbar-brand">Airbnb your home</a>
        <Link href="#">Login</Link>
      </div>
    </nav>
  );
}
