import styles from "./Contactanos.module.css";

export default function Contactanos() {
  return (
    <main className={styles.page}>

      <div className={styles.hero}>
        <h1>Contáctanos</h1>
        <p>Nuestro equipo está listo para brindarte orientación y acompañarte en cada paso.</p>
      </div>

      <section className={styles.container}>

        <div className={styles.info}>

          <div className={styles.block}>
            <h3>Ubicación</h3>
            <p>
              Carrera 55 No. 132-37,  <br />
              Villa Campestre, <br />
              Puerto Colombia, Atlántico, Colombia
            </p>
          </div>

          <div className={styles.block}>
            <h3>Teléfono</h3>
            <p>+57 301 484 8600</p>
          </div>

          <div className={styles.block}>
            <h3>Horarios</h3>
            <p>
             De lunes a viernes: 8:00 AM -12:00PM y de 1:00 PM – 5:00 PM <br/>
              Sábados de 8:00 AM -12:00PM
              <br />
            </p>
          </div>

        </div>

        <div className={styles.cta}>
          <a
            href="https://wa.me/573017230484"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Escríbenos por WhatsApp
          </a>
        </div>

      </section>
    </main>
  );
}
