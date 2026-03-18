import styles from "../../app/styles/Emotional.module.css";
import Image from "next/image";

export default function Emotional() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.left}>
          <span className={styles.tag}>Bienestar emocional</span>

          <h2>
            Apoyo emocional para el adulto y su familia
          </h2>

          <p className={styles.description}>
            Acompañamos los procesos de adaptación, fortalecemos la autoestima y 
            brindamos herramientas prácticas para mantener el equilibrio emocional 
            en cada etapa.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              Manejo de la sobrecarga del cuidado
            </div>
            <div className={styles.feature}>
              Estrategias de comunicación familiar
            </div>
            <div className={styles.feature}>
              Organización saludable de rutinas
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <Image
            src="/images/emocional hija y madre viendo album de fotos.png"
            alt="Profesional acompañando emocionalmente a adulto mayor"
            fill
            className={styles.image}
            priority
          />
        </div>

      </div>

    </section>
  );
}
