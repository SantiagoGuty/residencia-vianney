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
                Evaluación inicial interdisciplinaria que incluye valoración inicial
                por  neuropsicológica, permitiendo diseñar un plan de cuidado personalizado según las necesidades del adulto mayor
            </p>
          </div>

          <div className={styles.card}>
            <h3>Estimulación Cognitiva</h3>
            <p>
              Actividades diseñadas para mantener la mente activa mediante ejercicios de memoria, lectura, escritura, 
              juegos mentales y espacios de conversación que fortalecen la atención, el razonamiento y el bienestar emocional.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acompañamiento Emocional</h3>
            <p>
              Apoyo psicológico continuo para residentes y familias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Atención Profesional Continua</h3>
            <p>
              Supervisión profesional constante con terapia ocupacional, 
              fisioterapia y psicología para preservar la autonomía y funcionalidad del adulto mayor.           
            </p>
          </div>

          <div className={styles.card}>
            <h3>Servicios para el Bienestar del Adulto Mayor</h3>
            <p>
              • Hidroterapia <br />
              • Servicios de enfermería 24/7 <br />
              • Nutrición personalizada
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actividades para residentes internos y Adulto Día</h3>
            <p>
              • Club de lectura <br />
              • Club de escritura<br />
              • Club de idiomas<br />
              • Talleres grupales para familiares
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
