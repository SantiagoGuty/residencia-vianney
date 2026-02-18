import SectionLayout from "@/components/ui/SectionLayout";
import styles from "./Modalities.module.css";

export default function Modalities() {
  return (
    <SectionLayout alt>
      <div className={styles.wrapper}>

        <div className={styles.header}>
          <span className={styles.tag}>Modalidades</span>
          <h2>Opciones de atención adaptadas a cada necesidad</h2>
        </div>

        <div className={styles.cards}>

          <div className={styles.card}>
            <div className={styles.accent}></div>
            <h3>Internación completa (24/7)</h3>
            <p>
              Supervisión continua con plan terapéutico estructurado,
              adaptado al nivel funcional y necesidades clínicas
              y emocionales.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.accent}></div>
            <h3>Adulto Día</h3>
            <p>
              Programa por horas enfocado en estimulación cognitiva,
              socialización segura y acompañamiento familiar.
            </p>
          </div>

        </div>

      </div>
    </SectionLayout>
  );
}
