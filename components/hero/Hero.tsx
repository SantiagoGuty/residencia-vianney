"use client";

import styles from "../../app/styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return ( 
    <section className={styles.hero} aria-label="Sección principal">
      <div className={styles.geoShapes}>
  <svg
    viewBox="0 0 800 500"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
  {/* Large ring — top right */}
  <circle cx="720" cy="-30" r="160" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2"/>
  <circle cx="720" cy="-30" r="120" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5"/>

  {/* Medium teal ring — mid right */}
  <circle cx="770" cy="320" r="95" fill="none" stroke="rgba(46,204,154,0.35)" strokeWidth="2"/>
  <circle cx="770" cy="320" r="68" fill="rgba(46,204,154,0.08)"/>

  {/* Small solid circle */}
  <circle cx="650" cy="420" r="26" fill="rgba(255,255,255,0.10)"/>

  {/* Dot cluster */}
  <circle cx="598" cy="455" r="7" fill="rgba(255,255,255,0.22)"/>
  <circle cx="616" cy="443" r="5" fill="rgba(46,204,154,0.38)"/>
  <circle cx="632" cy="458" r="6" fill="rgba(255,255,255,0.15)"/>
  <circle cx="608" cy="470" r="4" fill="rgba(46,204,154,0.25)"/>

  {/* Bottom-left arc */}
  <circle cx="-20" cy="540" r="140" fill="none" stroke="rgba(46,204,154,0.28)" strokeWidth="2"/>
  <circle cx="-20" cy="540" r="105" fill="rgba(46,204,154,0.08)"/>

  {/* Triangle */}
  <polygon points="130,0 178,72 82,72" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>

  {/* Plus cross */}
  <line x1="548" y1="44" x2="548" y2="96" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round"/>
  <line x1="522" y1="70" x2="574" y2="70" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round"/>

  {/* Diamond */}
  <polygon points="555,110 563,120 555,130 547,120" fill="none" stroke="rgba(46,204,154,0.4)" strokeWidth="1.5"/>

  {/* Left ring */}
  <circle cx="18" cy="220" r="78" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>

  {/* Dash accent */}
  <line x1="70" y1="420" x2="140" y2="420" stroke="rgba(46,204,154,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
  <line x1="150" y1="420" x2="165" y2="420" stroke="rgba(46,204,154,0.18)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
      </div>
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
