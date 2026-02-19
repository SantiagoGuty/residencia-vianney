"use client";

import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* LEFT SIDE */}
        <div className={styles.brandColumn}>
          <div
            className={styles.logoWrapper}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <Image
              src="/logo.png"
              alt="Jean Baptiste Marie Vianey"
              width={200}
              height={200}
              className={styles.logo}
              priority
            />
          </div>

          <p className={styles.description}>
            Atención humana y profesional centrada en la persona,
            acompañando cada etapa con criterio clínico y calidez.
          </p>
        </div>

        {/* SITE MAP */}
        <div className={styles.linksColumn}>
          <h4>Mapa del sitio</h4>
          <a href="#">Inicio</a>
          <a href="#">Propósito</a>
          <a href="#">Servicios</a>
          <a href="#">Valoración</a>
          <a href="#">Contacto</a>
        </div>

        {/* LEGAL */}
        <div className={styles.linksColumn}>
          <h4>Legal</h4>
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>

        {/* WHATSAPP ROW (SECOND FLOOR) */}
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
              width={60}
              height={60}
            />
          </a>
        </div>

      </div>

      <div className={styles.bottomStrip}>
        © 2026 Geriátrico Jean Baptiste Marie Vianey.
      </div>
    </footer>
  );
}
