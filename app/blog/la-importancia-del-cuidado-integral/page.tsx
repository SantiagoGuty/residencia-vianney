import styles from "../../styles/BlogPost.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "La importancia del cuidado integral en el adulto mayor | Blog Club House Vianey",
  description:
    "El cuidado integral reconoce que el bienestar del adulto mayor depende de múltiples dimensiones interconectadas: física, emocional y cognitiva.",
};

export default function CuidadoIntegral() {
  return (
    <>
      <main className={styles.page}>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroBadge}>
            <span>Bienestar</span>
            <span>·</span>
            <span>Abril 2026</span>
          </div>
          <h1>La importancia del cuidado integral en el adulto mayor</h1>
          <p className={styles.heroSubtitle}>
            Cuidar no es solo atender… es comprender todas las dimensiones de la vida
          </p>
          <div className={styles.heroMeta}>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              8 min de lectura
            </span>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Club House Jean Batista Marie Vianey
            </span>
          </div>
        </div>

        {/* Article */}
        <div className={styles.articleWrapper}>

          <Link href="/blog" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Volver al Blog
          </Link>

          {/* Introduction */}
          <div className={styles.intro}>
            <p className={styles.introLabel}>🧠 Introducción</p>
            <p>
              El envejecimiento poblacional es una realidad global que está transformando
              la forma en que entendemos la salud y el bienestar.
            </p>
            <p>
              Según la Organización Mundial de la Salud, el número de personas mayores
              de 60 años se duplicará para el año 2050, lo que plantea nuevos retos en
              los sistemas de cuidado.
            </p>
            <p>
              En este contexto, ya no es suficiente centrarse únicamente en la atención
              médica. Hoy se habla de <strong>cuidado integral</strong>: un enfoque que
              reconoce que el bienestar del adulto mayor depende de múltiples dimensiones
              interconectadas.
            </p>
          </div>

          {/* Development */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionEmoji}>🧩</span>
            Desarrollo
          </h2>

          {/* Physical dimension */}
          <div className={styles.dimensionCard}>
            <h3>
              <span>🏃‍♂️ </span>
              Dimensión física
            </h3>
            <p className={styles.subtitle}>El cuerpo como base del bienestar</p>
            <p>El cuidado físico incluye:</p>
            <ul className={styles.featureList}>
              <li>Control de enfermedades crónicas</li>
              <li>Seguimiento médico continuo</li>
              <li>Alimentación adecuada</li>
              <li>Actividad física adaptada</li>
            </ul>
            <p>
              Estos elementos no solo prolongan la vida, sino que mejoran su calidad.
              Un adulto mayor con buena salud física conserva mayor autonomía, lo que
              impacta directamente en su autoestima y bienestar general.
            </p>
          </div>

          {/* Emotional dimension */}
          <div className={`${styles.dimensionCard} ${styles.green}`}>
            <h3>
              <span>💬 </span>
              Dimensión emocional
            </h3>
            <p className={styles.subtitle}>Sentirse acompañado también es salud</p>
            <p>El envejecimiento puede venir acompañado de:</p>
            <ul className={styles.featureList}>
              <li>Pérdida de roles</li>
              <li>Duelo</li>
              <li>Aislamiento social</li>
              <li>Sensación de soledad</li>
            </ul>
            <p>Por eso, el acompañamiento emocional es fundamental. Escuchar, validar
            y generar espacios de conexión permite:</p>
            <ul className={styles.featureList}>
              <li>Reducir la ansiedad y la depresión</li>
              <li>Fortalecer el sentido de pertenencia</li>
              <li>Mejorar la calidad de vida</li>
            </ul>
            <p>
              La salud emocional no es un complemento… es una necesidad.
            </p>
          </div>

          {/* Cognitive dimension */}
          <div className={`${styles.dimensionCard} ${styles.beige}`}>
            <h3>
              <span>🧠 </span>
              Dimensión cognitiva
            </h3>
            <p className={styles.subtitle}>Mantener la mente activa es preservar la identidad</p>
            <p>
              El deterioro cognitivo no es inevitable, pero sí requiere atención.
              Estimular la mente a través de:
            </p>
            <ul className={styles.featureList}>
              <li>Actividades cognitivas</li>
              <li>Juegos de memoria</li>
              <li>Lectura</li>
              <li>Interacción social</li>
            </ul>
            <p>ayuda a:</p>
            <ul className={styles.featureList}>
              <li>Mantener funciones mentales</li>
              <li>Retrasar el deterioro cognitivo</li>
              <li>Preservar la autonomía</li>
            </ul>
            <p>
              Según el informe publicado en <em>The Lancet</em>, el enfoque preventivo
              en salud cognitiva tiene un impacto significativo en el envejecimiento
              saludable.
            </p>
          </div>

          {/* Why integral */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionEmoji}>💚</span>
            ¿Por qué el enfoque integral marca la diferencia?
          </h2>

          <div className={styles.callout}>
            <p>Cuando se atiende solo una dimensión, el cuidado queda incompleto.</p>
            <p>
              <span className={styles.calloutArrow}>→</span>{" "}
              Un adulto mayor puede estar médicamente estable, pero emocionalmente afectado.
            </p>
            <p>
              <span className={styles.calloutArrow}>→</span>{" "}
              O físicamente bien, pero con deterioro cognitivo progresivo.
            </p>
            <p>
              El enfoque integral permite ver a la persona como un todo, no como un
              conjunto de síntomas.
            </p>
          </div>

          {/* Conclusion */}
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionEmoji}>✨</span>
            Conclusión
          </h2>

          <div className={styles.conclusion}>
            <p>El cuidado integral no solo mejora la calidad de vida del adulto mayor…</p>
            <p>
              <span className={styles.conclusionArrow}>→</span>{" "}
              <strong>la transforma.</strong>
            </p>
            <p>
              Permite que cada etapa de la vida se viva con dignidad, bienestar y sentido.
            </p>
            <p>Porque cuidar no es solo prolongar los años…</p>
            <p>
              <span className={styles.conclusionArrow}>→</span>{" "}
              <strong>es dar vida a los años.</strong>
            </p>
          </div>

          {/* References */}
          <div className={styles.references}>
            <h3>📚 Referencias</h3>
            <ol>
              <li>
                Organización Mundial de la Salud. (2020).{" "}
                <em>Envejecimiento saludable.</em> Ginebra: OMS.
              </li>
              <li>
                Beard, J. R., Officer, A., de Carvalho, I. A., Sadana, R., Pot, A. M.,
                Michel, J. P., … &amp; Chatterji, S. (2016). The World report on ageing
                and health: a policy framework for healthy ageing.{" "}
                <em>The Lancet, 387</em>(10033), 2145–2154.{" "}
                <a
                  href="https://doi.org/10.1016/S0140-6736(15)00516-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1016/S0140-6736(15)00516-4
                </a>
              </li>
            </ol>
          </div>

        </div>

        {/* CTA band */}
        <div className={styles.ctaBand}>
          <h2>¿Quieres conocer nuestro modelo de cuidado integral?</h2>
          <p>
            Agenda una visita y descubre cómo acompañamos a cada adulto mayor en
            todas las dimensiones de su bienestar.
          </p>
          <Link href="/contactanos" className={styles.ctaButton}>
            Contáctanos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </main>
    </>
  );
}
