"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>

        <div className={styles.logoWrapper}>
          <Image
            src="/logo.png"
            alt="Geriátrico Jean Baptiste Marie Vianey"
            width={160}
            height={160}
            className={styles.logo}
            priority
          />
        </div>

        <nav className={styles.links}>
          <a href="#servicios">Servicios</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#equipo">Equipo</a>
          <a href="#contacto" className={styles.contactButton}>
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}
