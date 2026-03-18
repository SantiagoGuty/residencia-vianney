import styles from "../../app/styles/Classification.module.css";

export default function Classification() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.tag}>Evaluación personalizada</span>
          <h2>Nivel de acompañamiento</h2>
          <p>
            Con base en la valoración integral realizada, nuestro equipo define el
            nivel de acompañamiento más adecuado para cada residente. Esto nos permite
            ofrecer un cuidado ajustado a su grado de autonomía y a las necesidades de
            apoyo que requiera en su vida diaria.
          </p>
        </div>

        <div className={styles.grid}>

          <div className={`${styles.card} ${styles.g1}`}>
            <div className={styles.badge}>G1</div>
            <h3>Autonomía activa</h3>
            <p>
              Independencia o apoyos mínimos.
              Enfoque en prevención, autonomía
              y vida activa.
            </p>
          </div>

          <div className={`${styles.card} ${styles.g2}`}>
            <div className={styles.badge}>G2</div>
            <h3>Acompañamiento asistido</h3>
            <p>
              Acompañamiento moderado enfocado
              en seguridad, estimulación y
              fortalecimiento progresivo.
            </p>
          </div>

          <div className={`${styles.card} ${styles.g3}`}>
            <div className={styles.badge}>G3</div>
            <h3>Cuidado integral</h3>
            <p>
              Atención integral centrada en confort,
              supervisión continua y acompañamiento
              cercano a la familia.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
