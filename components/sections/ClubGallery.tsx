import styles from "./ClubGallery.module.css";
import Image from "next/image";

const images = [
  {
    src: "/images/sala-vianney1.jpeg",
    alt: "Piscina exterior con área de descanso techada y columnas",
    caption: "Zona exterior con piscina y área de descanso."
  },
  {
    src: "/images/muebles-vianney1.jpeg",
    alt: "Área social con muebles cómodos y vista al jardín",
    caption: "Espacio social diseñado para el bienestar."
  },
  {
    src: "/images/entrada-casa-vianney1.jpeg",
    alt: "Vista amplia del club con entorno natural",
    caption: "Ambiente tranquilo rodeado de naturaleza."
  },

{
    src: "/images/piscina-vianney-vista1.jpeg",
    alt: "Vista amplia de la piscina con entorno natural",
    caption: "Piscina recreativa."
  },

];

export default function ClubGallery() {
  return (
    <section
      className={styles.section}
      aria-labelledby="club-gallery-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="club-gallery-title">
            Nuestro Club House
          </h2>
          <p>
            Espacios diseñados para la tranquilidad, la recreación y el bienestar.
          </p>
        </header>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <figure key={index} className={styles.card}>
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className={styles.image}
              />
              <figcaption className={styles.caption}>
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}