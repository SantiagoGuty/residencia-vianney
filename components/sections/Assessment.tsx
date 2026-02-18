import SectionLayout from "@/components/ui/SectionLayout";
import styles from "./Assessment.module.css";

export default function Assessment() {
  return (
    <SectionLayout alt>
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <span className={styles.step}>01</span>

          <h2>El primer paso: una valoración integral</h2>

          <p>
            Antes de iniciar cualquier proceso, realizamos una evaluación
            completa del adulto mayor y su entorno familiar para diseñar
            un plan personalizado.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Funcionalidad</h3>
              <p>Actividades de la vida diaria y autonomía.</p>
            </div>

            <div className={styles.card}>
              <h3>Cognición</h3>
              <p>Memoria, atención y orientación.</p>
            </div>

            <div className={styles.card}>
              <h3>Emocional</h3>
              <p>Estado anímico y adaptación.</p>
            </div>

            <div className={styles.card}>
              <h3>Familia</h3>
              <p>Contexto del cuidador y red de apoyo.</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.highlight}>
            <h3>Evaluación personalizada</h3>
            <p>
              Cada persona es única. Nuestro enfoque combina
              criterio clínico, escucha activa y acompañamiento
              familiar para garantizar decisiones informadas.
            </p>
          </div>
        </div>

      </div>
    </SectionLayout>
  );
}
