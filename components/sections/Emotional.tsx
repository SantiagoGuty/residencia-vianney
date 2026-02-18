import SectionImage from "@/components/ui/SectionImage";

export default function Emotional() {
  return (
    <section className="section alt section-with-image">
      <div className="text">
        <h2>Bienestar emocional para el adulto y su familia</h2>

        <p>
          Brindamos acompañamiento psicológico al adulto mayor para favorecer la
          adaptación a los cambios, el manejo del estrés y la autoestima.
        </p>

        <ul>
          <li>Manejo de la sobrecarga del cuidado</li>
          <li>Estrategias de comunicación</li>
          <li>Organización de rutinas</li>
        </ul>
      </div>

      <SectionImage
        src="/images/emotional.jpg"
        alt="Acompañamiento emocional al adulto mayor"
      />
    </section>
  );
}
