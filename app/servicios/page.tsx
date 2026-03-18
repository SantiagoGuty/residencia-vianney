import styles from "../styles/Servicios.module.css";
import Image from "next/image";

export default function Servicios() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <h1>Servicios</h1>
        <p>Cuidado profesional con enfoque humano</p>
      </div>

      {/* Services + Image */}
      <section className={styles.container}>
        <div className={styles.contentLayout}>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Evaluación integral y planificación del cuidado</h3>
              <p>
                Evaluación interdisciplinaria que incluye valoración
                neuropsicológica inicial para diseñar un plan de cuidado
                personalizado según las necesidades del adulto mayor.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Estimulación cognitiva</h3>
              <p>
                Actividades diseñadas para mantener la mente activa mediante
                ejercicios de memoria, lectura, escritura y juegos mentales
                que fortalecen la atención y el razonamiento.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Acompañamiento emocional</h3>
              <p>
                Apoyo psicológico continuo para el adulto mayor y su familia,
                favoreciendo la adaptación emocional y el bienestar.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Atención profesional continua</h3>
              <p>
                Seguimiento permanente por profesionales en terapia ocupacional,
                fisioterapia y psicología para preservar la autonomía y
                funcionalidad.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Actividades para residentes y Adulto Día</h3>
              <p>
                • Club de lectura <br />•&nbsp; Club de escritura <br />•&nbsp;
                Club de idiomas <br />•&nbsp; Talleres grupales para familias
              </p>
            </div>

            <div className={styles.card}>
              <h3>Bienestar integral del adulto mayor</h3>
              <p>
                • Hidroterapia <br />• Servicios de enfermería 24/7
               <br />• Nutrición personalizada
              </p>
            </div>
          </div>

          <div className={styles.imageSection}>
            <Image
              src="/images/pareja mayor abrazandose.png"
              alt="Atención médica especializada"
              width={500}
              height={600}
              className={styles.image}
            />
          </div>

        </div>
      </section>

      {/* Modalidades */}
      <section className={styles.modalidades}>
        <div className={styles.modalidadesInner}>
          <h2 className={styles.modalidadesTitle}>Modalidades de atención</h2>
          <div className={styles.modalidadesGrid}>

            <div className={styles.modalidadCard}>
              <div className={styles.modalidadNumber}>01</div>
              <h3>Internación completa</h3>
              <span className={styles.badge}>24/7</span>
              <p>
                Acompañamiento permanente en un entorno tranquilo y seguro, con
                supervisión profesional y acceso a todos los servicios y
                actividades de bienestar y estimulación ofrecidos en nuestro
                Club House.
              </p>
            </div>

            <div className={styles.modalidadCard}>
              <div className={styles.modalidadNumber}>02</div>
              <h3>Adulto Día</h3>
              <span className={styles.badge}>Diurno</span>
              <p>
                Jornadas diseñadas para estimular la mente y el bienestar
                físico, fomentar la socialización y promover la calidad de vida
                del adulto mayor, con acceso a los servicios y actividades de
                estimulación, acompañamiento y cuidado ofrecidos en nuestro
                Club House durante el día.
              </p>
            </div>

            <div className={styles.modalidadCard}>
              <div className={styles.modalidadNumber}>03</div>
              <h3>Estancia temporal</h3>
              <span className={styles.badge}>Flexible</span>
              <p>
                Alojamiento por días o temporadas en un entorno seguro y
                acogedor, con acompañamiento profesional y acceso a los
                servicios y actividades de bienestar y estimulación ofrecidos
                en nuestro Club House.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}