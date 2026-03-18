"use client";

import styles from "../../app/styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return ( 
    <section className={styles.hero} aria-label="Sección principal">
      <div className={styles.left}>
        <h1>
        Club house Vianey, cuidados integral para el adulto mayor, con profesionalismo y calidez humana        </h1>

        <p>
          En Club House Vianey ofrecemos un acompañamiento integral para el adulto mayor, combinando atención profesional con un trato humano y cercano.
          Creamos un entorno seguro y tranquilo donde cada persona puede mantenerse activa, acompañada y emocionalmente conectada, promoviendo su bienestar físico, cognitivo y social.
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
