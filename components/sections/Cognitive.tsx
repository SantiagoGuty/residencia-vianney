import SectionLayout from "@/components/ui/SectionLayout";
import styles from "../../app/styles/Cognitive.module.css";

export default function Cognitive() {
  return (
    <SectionLayout alt>
      <div className={styles.wrapper}>

        <div className={styles.header}>
          <span className={styles.tag}>Estimulación cognitiva</span>

          <h2>Mente activa, autonomía fortalecida</h2>

          <p className={styles.intro}>
            A través de nuestras actividades de estimulación cognitiva y 
            acompañamiento profesional, ayudamos a los adultos mayores a 
            mantenerse activos, fortalecer sus capacidades y conservar su 
            independencia en la vida diaria.
          </p>
        </div>

        <div className={styles.pillars}>
          <div className={styles.card}>
            <h3>Memoria</h3>
            <span className={styles.subtitle}>Fortalecimiento de las funciones cognitivas</span>
            <p>
              Actividades que estimulan la memoria, la atención y el
              pensamiento para afrontar mejor las situaciones del día a día.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Atención</h3>
            <span className={styles.subtitle}>Agilidad mental y bienestar emocional</span>
            <p>
              Ejercicios que mantienen la mente activa, favorecen la
              interacción social y promueven el bienestar emocional.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Orientación</h3>
            <span className={styles.subtitle}>Fortalecimiento de las funciones cognitivas</span>
            <p>
              Actividades que estimulan la memoria, la atención y el
              pensamiento para afrontar mejor las situaciones del día a día.
            </p>
          </div>
        </div>

      </div>
    </SectionLayout>
  );
}