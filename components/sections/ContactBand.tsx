import styles from "../../app/styles/ContactBand.module.css";
import Image from "next/image";

export default function ContactBand() {
  return (
    <section className={styles.band} id="contacto">
      <div className={styles.container}>

        <div className={styles.item}>
          <Image src="/icons/medicina.png" alt="Ubicación" width={40} height={40} />
          <p>
            Carrera 55 No 132-37<br />
            Villa Campeste, Puerto Colombia
          </p>
        </div>

        <div className={styles.item}>
          <Image src="/icons/nutricion.png" alt="Contacto" width={40} height={40} />
          <p>
            +57 301 484 8600<br />
          </p>
        </div>

        <div className={styles.item}>
          <Image src="/icons/fisioterapia.png" alt="Horarios" width={40} height={40} />
          <p>
            Lunes – Viernes: 8AM – 12PM<br />
            Sábados: 8AM – 1PM
          </p>
        </div>

        <div className={styles.item}>
          <Image src="/icons/enfermeria.png" alt="Redes sociales" width={40} height={40} />
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/share/17yPntmymA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook 
            </a> <br /> <br />
            <a
              href="https://www.instagram.com/clubhousevianey?igsh=NHcwYTQyOWUwbmF3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}