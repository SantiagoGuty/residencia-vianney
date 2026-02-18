import SectionImage from "@/components/ui/SectionImage";

export default function Cognitive() {
  return (
    <section className="section section-with-image">
      <SectionImage
        src="/images/cognitive.jpg"
        alt="Estimulación cognitiva en adultos mayores"
      />

      <div className="text">
        <h2>Mente activa y estimulación cognitiva</h2>

        <p>
          Realizamos evaluaciones neuropsicológicas para conocer el perfil
          cognitivo del adulto mayor y orientar el plan terapéutico con precisión.
        </p>

        <p>
          Las sesiones están diseñadas para fortalecer habilidades mentales
          mediante actividades prácticas, agradables y adaptadas a cada nivel.
        </p>
      </div>
    </section>
  );
}
