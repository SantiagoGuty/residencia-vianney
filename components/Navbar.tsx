"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Auto close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);


  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.logoWrapper} onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Geriátrico Jean Baptiste Marie Vianey"
            width={160}
            height={160}
            className={styles.logo}
            priority
          />
        </a>

        {/* Desktop links */}
        <nav className={styles.links} aria-label="Navegación principal">
          <Link href="/servicios">Servicios</Link>
          <Link href="/quienes-somos">Quiénes Somos</Link>
          <Link href="/contactanos" className={styles.contactButton}>
            Contáctanos
          </Link>

        </nav>

        {/* ✅ Tolima-style burger (same SVG + same class pattern) */}
        <div className={styles.menuToggle}>
          <button
            type="button"
            className={`${styles.menuButton} ${open ? styles.opened : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Main Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden="true">
              <path
                className={`${styles.line} ${styles.line1}`}
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path
                className={`${styles.line} ${styles.line2}`}
                d="M 20,50 H 80"
              />
              <path
                className={`${styles.line} ${styles.line3}`}
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        aria-label="Menú móvil"
      >
          <Link href="/servicios" onClick={closeMenu}>Servicios</Link>
          <Link href="/quienes-somos" onClick={closeMenu}>Quienes Somos</Link>
          <Link href="/contactanos" onClick={closeMenu} className={styles.mobileCTA}>
            Contactanos
          </Link>


        <div className={styles.mobileDivider} />

        <a
          className={styles.whatsappBtn}
          href="https://wa.me/573017230484"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
