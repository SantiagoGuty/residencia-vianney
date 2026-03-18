import SectionLayout from "@/components/ui/SectionLayout";
import styles from "../../app/styles/Purpose.module.css";

export default function Purpose() {
  return (
    <section className={styles.background}>
      <div className="container">
        <div className={styles.content}>
          <h2>Más que cuidar, acompañamos cada historia de vida</h2>

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
