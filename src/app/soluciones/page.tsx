import { Metadata } from 'next';
import { ContactBand, PageHero, SectionIntro, SplitFeature } from '../components';
import { serviceDetails } from '../data';
import { SolutionsBento } from '../solutions-bento';

export const metadata: Metadata = {
  title: 'Soluciones digitales - NexoLT',
  description: 'Sistemas, webs, automatizaciones e integraciones a medida para equipos de cualquier rubro.'
};

export default function SolucionesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Soluciones"
        title="Herramientas digitales para ordenar el trabajo diario."
        text="Desarrollamos soluciones que conectan operacion, ventas, administracion y datos. La idea no es sumar software por sumar, sino construir una herramienta que encaje con la forma real de trabajar."
        image="/assets/images/hero-argentina-software.jpg"
        alt="Sistema digital de gestion y automatizacion para equipos de trabajo"
      />

      <SectionIntro
        eyebrow="Que podemos construir"
        title="Modulos claros, integrados y pensados para crecer"
        text="Cada proyecto puede empezar chico y sumar capacidades cuando el proceso lo pide. Priorizamos impacto, uso real y mantenimiento simple."
      />
      <SolutionsBento />
      <section className="detail-grid">
        {serviceDetails.map((service) => (
          <article key={service.title}>
            <span>{service.label}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul>
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <SplitFeature
        eyebrow="Enfoque"
        title="Primero entendemos la operacion, despues elegimos la tecnologia"
        text="Un buen sistema no nace de una lista infinita de funciones. Nace de entender que decisiones se toman, que datos faltan, donde se pierde tiempo y que necesita ver cada persona."
        image="/assets/images/integraciones-sistemas.jpg"
        alt="Dashboard central con datos, integraciones y modulos conectados"
        reverse
      >
        <div className="mini-grid">
          <article>
            <strong>Menos friccion</strong>
            <span>Interfaces claras para que el equipo use la herramienta sin pelearse con ella.</span>
          </article>
          <article>
            <strong>Mas trazabilidad</strong>
            <span>Estados, responsables e historial para saber que paso y que sigue.</span>
          </article>
          <article>
            <strong>Datos utiles</strong>
            <span>Reportes que ayudan a decidir, no tableros llenos de ruido.</span>
          </article>
          <article>
            <strong>Escalabilidad</strong>
            <span>Arquitectura simple para crecer sin rehacer todo desde cero.</span>
          </article>
        </div>
      </SplitFeature>

      <ContactBand title="Convirtamos una necesidad en una solucion concreta." />
    </main>
  );
}
