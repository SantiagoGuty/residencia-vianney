import styles from "./Classification.module.css";

export default function Classification() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.tag}>Evaluación personalizada</span>
          <h2>Clasificación funcional (G1 – G3)</h2>
          <p>
            Valoramos el nivel funcional de cada residente para diseñar
            un plan de atención clínico, humano y adaptado a sus necesidades.
          </p>
        </div>

        <div className={styles.grid}>

          <div className={`${styles.card} ${styles.g1}`}>
            <div className={styles.badge}>G1</div>
            <h3>Muy funcional</h3>
            <p>
              Independencia o apoyos mínimos.
              Enfoque en prevención, autonomía
              y vida activa.
            </p>
          </div>

          <div className={`${styles.card} ${styles.g2}`}>
            <div className={styles.badge}>G2</div>
            <h3>Funcional con apoyos</h3>
            <p>
              Acompañamiento moderado enfocado
              en seguridad, estimulación y
              fortalecimiento progresivo.
            </p>
          </div>

          <div className={`${styles.card} ${styles.g3}`}>
            <div className={styles.badge}>G3</div>
            <h3>Alta dependencia</h3>
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
