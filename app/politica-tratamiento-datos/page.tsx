import styles from "../legal/Legal.module.css";

export default function PoliticaTratamientoDatos() {
  return (
    <main className={styles.page}>

      <div className={styles.hero}>
        <h1>Política de Tratamiento de Datos</h1>
        <p>Ley 1581 de 2012 – Protección de Datos Personales</p>
      </div>

      <section className={styles.container}>
        <div className={styles.text}>

          <h2>1. Responsable del Tratamiento</h2>
          <p>
            El Geriátrico Jean Baptiste María Vianney, con domicilio en Colombia,
            es responsable del tratamiento de los datos personales recolectados
            a través de su sitio web y medios de contacto.
          </p>

          <h2>2. Finalidad del Tratamiento</h2>
          <p>
            Los datos personales serán utilizados para:
            - Gestión de solicitudes de información
            - Coordinación de servicios
            - Comunicación institucional
            - Cumplimiento de obligaciones legales
          </p>

          <h2>3. Derechos del Titular</h2>
          <p>
            El titular de los datos podrá conocer, actualizar, rectificar y
            suprimir su información conforme a lo establecido en la Ley 1581
            de 2012 y el Decreto 1377 de 2013.
          </p>

          <h2>4. Seguridad de la Información</h2>
          <p>
            Se adoptan medidas técnicas, humanas y administrativas necesarias
            para garantizar la seguridad y confidencialidad de los datos.
          </p>

        </div>
      </section>

    </main>
  );
}