import styles from "../legal/Legal.module.css";

export default function TerminosCondiciones() {
  return (
    <main className={styles.page}>

      <div className={styles.hero}>
        <h1>Términos y Condiciones</h1>
        <p>Ley 1480 de 2011 – Estatuto del Consumidor</p>
      </div>

      <section className={styles.container}>
        <div className={styles.text}>

          <h2>1. Objeto</h2>
          <p>
            El presente documento regula el uso del sitio web del
            Geriátrico Jean Baptiste María Vianney.
          </p>

          <h2>2. Uso del Sitio</h2>
          <p>
            El usuario se compromete a utilizar el sitio de manera
            responsable, conforme a la legislación colombiana vigente.
          </p>

          <h2>3. Responsabilidad</h2>
          <p>
            La institución no se hace responsable por el uso indebido
            de la información publicada en el sitio web.
          </p>

          <h2>4. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de actualizar estos términos
            en cualquier momento.
          </p>

        </div>
      </section>

    </main>
  );
}