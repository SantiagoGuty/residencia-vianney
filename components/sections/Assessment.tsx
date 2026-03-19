import SectionLayout from "@/components/ui/SectionLayout";
import styles from "../../app/styles/Assessment.module.css";

export default function Assessment() {
  return (
    <SectionLayout alt>
      <div className={styles.sectionBg}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <span className={styles.step}></span>

            <h2>El primer paso: Una valoración integral</h2>

            <p>
              Antes de iniciar cualquier proceso, realizamos una evaluación
              completa del adulto mayor y su entorno familiar para diseñar
              un plan personalizado.
            </p>

            <h2>Nivel de acompañamiento</h2>

            <p>
              A partir de esta valoración, definimos el nivel de acompañamiento
              más adecuado para cada residente. Esto nos permite ofrecer un cuidado
              ajustado a su grado de autonomía y a las necesidades de apoyo que requiera
              en su vida diaria.
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
                Nuestro equipo realiza una valoración integral para comprender sus necesidades y
                ofrecer un acompañamiento cercano, adaptado a su bienestar y calidad de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}