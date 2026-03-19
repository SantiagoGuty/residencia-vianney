import styles from "../../app/styles/News.module.css";

export default function News() {
  return (
    <section className={styles.section} id="noticias">
      
      <div className={styles.inner}>

        <div className={styles.label}>
          <span className={styles.dot} />
          Noticias
        </div>

        <div className={styles.card}>

          <div className={styles.cardLeft}>
            <span className={styles.tag}>Próxima apertura</span>
            <h2>Club House Jean Batista Marie Vianey</h2>
            <p>
              Nos llena de alegría anunciar la próxima apertura de nuestro
              Club House, un espacio creado para el bienestar, la estimulación
              y el cuidado integral del adulto mayor, en un ambiente tranquilo,
              cálido y humano.
            </p>
            <p>
              Queremos invitar a familias como la tuya a conocer nuestras
              instalaciones y descubrir de cerca las actividades, servicios y
              programas que hemos diseñado para mantener a los adultos mayores
              activos, acompañados y con una mejor calidad de vida.
            </p>
            <p>
              Como parte de nuestra apertura, estaremos felices de recibirte
              con un recorrido por nuestras instalaciones para que puedas vivir
              la experiencia de nuestro Club House.
            </p>

            <a href="/contactanos" className={styles.cta}>
              Agenda tu visita
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className={styles.cardRight}>
            <div className={styles.accentBox}>
              <div className={styles.accentIcon}>🏡</div>
              <h3>Ven a conocernos</h3>
              <p>
                Agenda tu visita y vive de cerca la experiencia de nuestro
                Club House.
              </p>
              <ul className={styles.featureList}>
                <li>Recorrido por nuestras instalaciones</li>
                <li>Conoce nuestro equipo profesional</li>
                <li>Descubre nuestros programas</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}