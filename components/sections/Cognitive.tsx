import SectionLayout from "@/components/ui/SectionLayout";
import styles from "./Cognitive.module.css";

export default function Cognitive() {
  return (
    <SectionLayout alt>
      <div className={styles.wrapper}>

        <div className={styles.header}>
          <span className={styles.tag}>Estimulación cognitiva</span>

          <h2>Mente activa, autonomía fortalecida</h2>

          <p className={styles.intro}>
            Diseñamos planes personalizados para preservar la independencia,
            fortalecer funciones mentales y acompañar cada etapa con criterio
            clínico y humanidad.
          </p>
        </div>

        <div className={styles.pillars}>
          <div className={styles.card}>
            <h3>Memoria</h3>
            <p>
              Actividades estructuradas para reforzar memoria inmediata,
              reciente y a largo plazo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Atención</h3>
            <p>
              Ejercicios prácticos que fortalecen concentración,
              enfoque y capacidad de respuesta.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Orientación</h3>
            <p>
              Trabajo progresivo en orientación temporal, espacial
              y personal.
            </p>
          </div>
        </div>

      </div>
    </SectionLayout>
  );
}
