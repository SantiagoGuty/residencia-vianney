"use client";

import styles from "./Footer.module.css";
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
            Atención humana y profesional centrada en la persona,
            acompañando cada etapa con criterio clínico y calidez.
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
          <Link href="/politica-privacidad">
            Política de Privacidad
          </Link>
        </div>

      </div>

      {/* WhatsApp */}
      <div className={styles.whatsappRow}>
        <a
          href="https://wa.me/573017230484"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
        >
          <Image
            src="/images/whatsapp_blue.png"
            alt="WhatsApp"
            width={65}
            height={65}
          />
        </a>
      </div>

      {/* Bottom Strip */}
      <div className={styles.bottomStrip}>
        © {new Date().getFullYear()} Club House Jean Batista Marie Vianey. Todos los derechos reservados.
      </div>
    </footer>
  );
}