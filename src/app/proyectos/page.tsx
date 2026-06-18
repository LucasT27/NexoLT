import { Metadata } from 'next';
import { ContactBand, PageHero, SectionIntro } from '../components';
import { modelCases } from '../data';

export const metadata: Metadata = {
  title: 'Proyectos - NexoLT',
  description: 'Ejemplos de sistemas, webs, automatizaciones e integraciones que NexoLT puede desarrollar.'
};

export default function ProyectosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Proyectos"
        title="Casos que combinan estrategia, interfaz e integracion."
        text="Cada proyecto se piensa como una pieza de operacion: debe verse bien, funcionar rapido y resolver una necesidad concreta."
        image="/assets/images/rubros-software.jpg"
        alt="Casos de uso digitales para distintos equipos y rubros"
      />

      <SectionIntro
        eyebrow="Casos modelo"
        title="Escenarios tipicos para imaginar una solucion"
        text="No son clientes reales ni casos publicados. Son modelos de trabajo para mostrar como bajamos un problema operativo a una herramienta concreta."
      />
      <section className="model-case-grid">
        {modelCases.map((item) => (
          <article key={item.title}>
            <span>{item.type}</span>
            <h3>{item.title}</h3>
            <div className="case-block">
              <strong>Problema</strong>
              <p>{item.problem}</p>
            </div>
            <div className="case-block">
              <strong>Solucion</strong>
              <p>{item.solution}</p>
            </div>
            <div className="case-flow" aria-label={`Flujo para ${item.title}`}>
              {item.flow.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <div className="case-block">
              <strong>Resultado esperado</strong>
              <p>{item.outcome}</p>
            </div>
            <div className="pill-list compact">
              {item.components.map((component) => (
                <span key={component}>{component}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="wide-panel">
        <div>
          <p className="eyebrow">Criterio</p>
          <h2>No vendemos piezas sueltas: buscamos resolver un flujo completo</h2>
          <p>
            Una web puede necesitar automatizaciones. Un sistema interno puede necesitar reportes.
            Una integracion puede revelar que hace falta rediseñar una parte del proceso.
          </p>
        </div>
        <div className="pill-list">
          <span>Analisis</span>
          <span>UX/UI</span>
          <span>Frontend</span>
          <span>Backend</span>
          <span>Integraciones</span>
          <span>QA</span>
        </div>
      </section>

      <ContactBand title="Mostranos tu idea y la convertimos en plan." />
    </main>
  );
}
