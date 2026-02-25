import SectionLayout from "@/components/ui/SectionLayout";
import styles from "./Purpose.module.css";

export default function Purpose() {
  return (
    <section className={styles.background}>
      <div className="container">
        <div className={styles.content}>
          <h2>Cuidamos con humanidad, trabajamos con criterio clínico</h2>

          <p>
            En el Club House Jean Batista Marie Vianey ofrecemos una atención
            humana y profesional, centrada en la persona y en su familia.
          </p>

          <p>
            Nuestro propósito es acompañar al adulto mayor para que mantenga
            la mayor autonomía posible, fortalezca su salud cognitiva y viva
            con dignidad.
          </p>
        </div>
      </div>
    </section>
  );
}
