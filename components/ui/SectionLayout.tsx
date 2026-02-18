import styles from "./SectionLayout.module.css";

interface Props {
  title?: string;
  children: React.ReactNode;
  alt?: boolean;
}

export default function SectionLayout({ title, children, alt }: Props) {
  return (
    <section className={`${styles.section} ${alt ? styles.alt : ""}`}>
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
