import styles from "./Contactanos.module.css";

export default function Contactanos() {
  return (
    <main className={styles.page}>

      <div className={styles.hero}>
        <h1>Contáctanos</h1>
        <p>Estamos aquí para acompañarte</p>
      </div>

      <section className={styles.container}>

        <div className={styles.info}>

          <div className={styles.block}>
            <h3>Ubicación</h3>
            <p>
              Cra 49C # 80 – 125 <br />
              Consultorio 515 <br />
              Continental Medical Center
            </p>
          </div>

          <div className={styles.block}>
            <h3>Teléfono</h3>
            <p>+57 301 484 8600</p>
          </div>

          <div className={styles.block}>
            <h3>Horarios</h3>
            <p>
              Lunes – Viernes: 8AM – 8PM <br />
              Sábados: 10AM – 8PM
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
