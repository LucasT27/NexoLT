import { Metadata } from 'next';
import { ContactBand, PageHero, SectionIntro } from '../components';
import { implementationSteps } from '../data';

export const metadata: Metadata = {
  title: 'Implementacion - NexoLT',
  description: 'Proceso de relevamiento, diseño, desarrollo, pruebas y salida en vivo para soluciones digitales.'
};

export default function ImplementacionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Implementacion"
        title="Te acompañamos desde la idea hasta la salida en vivo."
        text="Un proyecto digital necesita claridad, orden y validaciones. Por eso trabajamos por etapas, con entregables visibles y decisiones documentadas."
        image="/assets/images/hero-argentina-software.jpg"
        alt="Equipo implementando una solucion digital con seguimiento de tareas"
      />

      <SectionIntro
        eyebrow="Proceso"
        title="Un camino simple para avanzar sin improvisar"
        text="Tomamos inspiracion de procesos de implementacion asistida: entender, planificar, construir, probar y acompañar el uso real."
      />
      <section className="timeline-grid">
        {implementationSteps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="wide-panel">
        <div>
          <p className="eyebrow">Acompañamiento</p>
          <h2>La entrega no termina cuando el sitio esta online</h2>
          <p>
            Revisamos formularios, performance, responsive, seguridad basica, analytics si aplica
            y ajustes de contenido para que la solucion pueda operar de verdad.
          </p>
        </div>
        <div className="mini-grid">
          <article>
            <strong>QA</strong>
            <span>Pruebas de navegacion, formularios, responsive y errores visibles.</span>
          </article>
          <article>
            <strong>Deploy</strong>
            <span>Publicacion en Netlify, variables, dominios y rollback cuando corresponde.</span>
          </article>
        </div>
      </section>

      <ContactBand title="Empecemos por entender que queres resolver." />
    </main>
  );
}
