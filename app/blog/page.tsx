import styles from "../styles/Blog.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Club House Jean Batista Marie Vianey",
  description:
    "Artículos sobre cuidado integral, bienestar y envejecimiento saludable del adulto mayor.",
};

const posts = [
  {
    slug: "la-importancia-del-cuidado-integral",
    tag: "Bienestar",
    date: "Abril 2026",
    title: "La importancia del cuidado integral en el adulto mayor",
    excerpt:
      "Cuidar no es solo atender… es comprender todas las dimensiones de la vida. Exploramos cómo el bienestar físico, emocional y cognitivo se interconectan para transformar la calidad de vida.",
  },
];

export default function Blog() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <h1>Blog</h1>
        <p>Reflexiones sobre cuidado, bienestar y envejecimiento saludable</p>
      </div>

      <section className={styles.container}>

        <div className={styles.label}>
          <span className={styles.dot} />
          Artículos
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <div className={styles.cardAccent} />
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.tag}>{post.tag}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Leer artículo
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
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}
