"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSlider.module.css";
import Image from "next/image";

const images = [
  "/images/viejita_1.png",
  "/images/viejita_y_enfermera_1.png",
  "/images/viejitos_1_fondo.png",
];
export default function HeroSlider() {
  const [index, setIndex] = useState(0);



useEffect(() => {
  let timeout: NodeJS.Timeout;

  const nextSlide = () => {
    timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      nextSlide();
    }, 8000); // total cycle time
  };

  nextSlide();

  return () => clearTimeout(timeout);
}, []);


  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>
          Planes de atención para cada etapa de la vida
        </h1>

        <p>
          Atención humana y profesional centrada en la persona,
          acompañando cada etapa con criterio clínico y calidez.
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
        {images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt="Hero image"
            fill
            priority
            className={`${styles.slide} ${
              i === index ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
}
