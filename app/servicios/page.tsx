import styles from "./Servicios.module.css";
import Image from "next/image";

export default function Servicios() {
  return (
    <main className={styles.page}>
      
      {/* Hero */}
      <div className={styles.hero}>
        <h1>Servicios</h1>
        <p>Cuidado profesional con enfoque humano</p>
      </div>

      <section className={styles.container}>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Valoración Integral</h3>
            <p>
              Evaluación médica completa que permite diseñar un plan de cuidado
              personalizado según cada necesidad.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Estimulación Cognitiva</h3>
            <p>
              Actividades orientadas a fortalecer memoria, atención y
              funciones cognitivas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acompañamiento Emocional</h3>
            <p>
              Apoyo psicológico continuo para residentes y familias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Atención Médica Continua</h3>
            <p>
              Seguimiento profesional constante y protocolos de seguridad.
            </p>
          </div>

        </div>

        <div className={styles.imageSection}>
          <Image
            src="/images/pareja mayor abrazandose.png"
            alt="Atención médica especializada"
            width={500}
            height={350}
            className={styles.image}
          />
        </div>

      </section>
    </main>
  );
}
