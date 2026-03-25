import styles from "../styles/QuienesSomos.module.css";
import Image from "next/image";

export default function QuienesSomos() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <h1>Quiénes Somos</h1>
        <p>Comprometidos con el cuidado integral y humano</p>
      </div>

      <section className={styles.container}>

        <div className={styles.content}>

          {/* Text */}
          <div className={styles.text}>
            <h2>Nuestra Filosofía</h2>

            <p>
              En el Club House Jean Batista María Vianney creemos que el cuidado
              del adulto mayor va más allá de la atención médica. Nuestra misión
              es brindar un acompañamiento integral que combine criterio clínico,
              calidez humana y respeto por la dignidad de cada persona.
            </p>

            <p>
              Somos un equipo interdisciplinario comprometido con promover la
              autonomía, el bienestar emocional y la estimulación cognitiva de
              nuestros residentes, siempre trabajando de la mano con sus familias.
            </p>

            <p>
              Nuestra filosofía se basa en la cercanía, la ética profesional y el
              acompañamiento constante, creando un entorno seguro, respetuoso y
              lleno de humanidad.
            </p>
          </div>

          {/* Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/familia consteña en el malecon en barranquilla.png"
              alt="Adulto mayor compartiendo con su familia en un entorno seguro y acogedor"
              width={500}
              height={380}
              className={styles.image}
              priority
            />
          </div>

        </div>

      </section>

    </main>
  );
}
