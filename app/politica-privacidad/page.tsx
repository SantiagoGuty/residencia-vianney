import styles from "../legal/Legal.module.css";

export default function PoliticaPrivacidad() {
  return (
    <main className={styles.page}>

      <div className={styles.hero}>
        <h1>Política de Privacidad</h1>
        <p>Transparencia y protección de la información</p>
      </div>

      <section className={styles.container}>
        <div className={styles.text}>

          <h2>1. Información Recopilada</h2>
          <p>
            Podemos recopilar información como nombre, teléfono,
            correo electrónico y cualquier dato proporcionado
            voluntariamente por el usuario.
          </p>

          <h2>2. Uso de la Información</h2>
          <p>
            La información será utilizada exclusivamente para fines
            administrativos, informativos y de prestación de servicios.
          </p>

          <h2>3. Confidencialidad</h2>
          <p>
            No compartimos información personal con terceros
            sin autorización expresa del titular.
          </p>

          <h2>4. Contacto</h2>
          <p>
            Para ejercer sus derechos puede comunicarse a través
            de nuestros canales oficiales.
          </p>

        </div>
      </section>

    </main>
  );
}