import { Metadata } from 'next';
import { ContactBand, PageHero, SectionIntro } from '../components';
import { modelCases } from '../data';
import { ModelCaseTabs } from '../model-case-tabs';

export const metadata: Metadata = {
  title: 'Proyectos - NexoLT',
  description: 'Proyectos desarrollados por NexoLT: ERPs, ecommerce, automatizaciones e integraciones.'
};

export default function ProyectosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Proyectos"
        title="Software real para operaciones reales."
        text="Estos proyectos muestran como llevamos problemas concretos a sistemas, ecommerce, automatizaciones e integraciones que se pueden usar todos los dias."
        image="/assets/images/rubros-software.jpg"
        alt="Casos de uso digitales para distintos equipos y rubros"
      />

      <SectionIntro
        eyebrow="Trabajos realizados"
        title="Cada caso tiene problema, solucion y una demo visual"
        text="La idea no es mostrar solo una lista de funciones: mostramos que necesidad habia, que sistema se construyo y como se veria el software funcionando."
      />
      <section className="model-case-grid">
        {modelCases.map((item) => (
          <article key={item.title}>
            <span>{item.type}</span>
            <h3>{item.title}</h3>
            <ModelCaseTabs item={item} />
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
