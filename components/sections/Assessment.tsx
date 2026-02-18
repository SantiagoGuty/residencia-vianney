import SectionImage from "@/components/ui/SectionImage";

export default function Assessment() {
  return (
    <section className="section alt section-with-image">
      <div className="text">
        <h2>El primer paso: conocer a la persona y a su familia</h2>

        <p>
          Antes de iniciar cualquier proceso, realizamos una valoración integral
          del adulto mayor y de su familia o cuidador.
        </p>

        <ul>
          <li>Funcionalidad en las actividades del día a día</li>
          <li>Memoria, atención y orientación</li>
          <li>Estado emocional y necesidades de acompañamiento</li>
          <li>Contexto familiar y del cuidador</li>
        </ul>
      </div>

      <SectionImage
        src="/images/assessment.jpg"
        alt="Valoración integral del adulto mayor"
      />
    </section>
  );
}
