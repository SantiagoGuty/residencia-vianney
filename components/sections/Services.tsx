import styles from "./Services.module.css";
import Image from "next/image";

export default function Services() {
  const services = [
    { icon: "/icons/neurologia.png", title: "Neurología y Psiquiatría" },
    { icon: "/icons/psicologia.png", title: "Psicología" },
    { icon: "/icons/medicina.png", title: "Medicina General" },
    { icon: "/icons/enfermeria.png", title: "Enfermería 24H" },
    { icon: "/icons/fisioterapia.png", title: "Fisioterapia" },
    { icon: "/icons/nutricion.png", title: "Nutrición y Dietética" },
  ];

  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
              />
            </div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
