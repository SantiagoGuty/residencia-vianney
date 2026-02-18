"use client";

import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return ( 
    <section className={styles.hero} aria-label="Sección principal">
      <div className={styles.left}>
        <h1>
          Hogar geriatrico Vianney, diseñados con criterio clínico y calidez humana
        </h1>

        <p>
          Atención especializada, personalizada y centrada en la calidad de vida. Nuestro equipo de profesionales se dedica a brindar cuidado integral, promoviendo bienestar físico, emocional y social en Barranquilla, Colombia.
        </p>

        <div className={styles.buttons}>
          <a href="#servicios" className={styles.primary}>
            Ver servicios
          </a>
          <a href="#contacto" className={styles.secondary}>
            Contacto
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <Image
          src="/images/pareja mayor abrazandose.png"
          alt="Adulto mayor acompañado por profesional de enfermería en un entorno cálido y seguro"
          fill
          priority
          className={styles.image}
        />
      </div>
    </section>
  );
}
