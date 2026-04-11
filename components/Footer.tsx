"use client";

import styles from "../app/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* BRAND */}
        <div className={styles.brandColumn}>
          <Link
            href="/"
            className={styles.logoWrapper}
            onClick={() => {
              if (pathname === "/") scrollTop();
            }}
          >
            <Image
              src="/logo.png"
              alt="Jean Baptiste Marie Vianey"
              width={200}
              height={200}
              className={styles.logo}
              priority
            />
          </Link>

          <p className={styles.description}>
            Un lugar donde el cuidado profesional y la calidez humana se unen
            para acompañar cada etapa de la vida.
          </p>

          <button className={styles.backToTop} onClick={scrollTop}>
            ↑ Volver arriba
          </button>
        </div>

        {/* SITE MAP */}
        <div className={styles.linksColumn}>
          <h4>Mapa del sitio</h4>
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/quienes-somos">Quiénes Somos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contactanos">Contáctanos</Link>
        </div>

        {/* LEGAL – COLOMBIA */}
        <div className={styles.linksColumn}>
          <h4>Legal</h4>
          <Link href="/politica-tratamiento-datos">
            Política de Tratamiento de Datos (Ley 1581/2012)
          </Link>
          <Link href="/terminos-condiciones">
            Términos y Condiciones (Ley 1480/2011)
          </Link>
          <Link href="/politica-privacidad">Política de Privacidad</Link>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className={styles.socialRow}>
        <a
          href="https://wa.me/573224171420"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="WhatsApp"
        >
          <Image
            src="/images/whatsapp_blue.png"
            alt="WhatsApp"
            width={65}
            height={65}
          />
        </a>

        <a
          href="https://www.instagram.com/clubhousevianey?igsh=NHcwYTQyOWUwbmF3"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="Instagram"
        >
          <Image
            src="/images/instagram_blue.png"
            alt="Instagram"
            width={65}
            height={65}
          />
        </a>

        <a
          href="https://www.tiktok.com/@clubhousevianey?_r=1&_t=ZS-94o5FJUUJzc"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="TikTok"
        >
          <Image
            src="/images/tiktok_blue.png"
            alt="TikTok"
            width={65}
            height={65}
          />
        </a>

        <a
          href="https://www.facebook.com/share/17yPntmymA/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="Facebook"
        >
          <Image
            src="/images/facebook_blue.png"
            alt="Facebook"
            width={65}
            height={65}
          />
        </a>
      </div>

      {/* Bottom Strip */}
      <div className={styles.bottomStrip}>
        © {new Date().getFullYear()} Club House Jean Batista Marie Vianey.
        Todos los derechos reservados.
      </div>
    </footer>
  );
}
