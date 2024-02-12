import React from "react";
import Image from "next/image";
import { Bars2Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/assets/logo.png"
          width={48}
          height={48}
          alt="company logo"
          priority
        />
      </div>

      <div className={styles.menu}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Data</a>
          </li>
          <li>
            <a href="#">Clients</a>
          </li>
        </ul>
      </div>
      <div className={styles.icons}>
        <MagnifyingGlassIcon width={18} height={18} color="#B8B8B8" />
        <Bars2Icon width={24} height={24} color="#C1C1C1" />
      </div>
    </nav>
  );
};

export default Navbar;
