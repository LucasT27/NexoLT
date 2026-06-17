import { Metadata } from 'next';
import { ContactBand, PageHero, SectionIntro } from '../components';
import { industryCases, industries } from '../data';

export const metadata: Metadata = {
  title: 'Rubros y casos - NexoLT',
  description: 'Soluciones digitales adaptadas a comercio, servicios, logistica, equipos internos y otros rubros.'
};

export default function RubrosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Rubros"
        title="No importa el rubro: importa entender como trabaja tu equipo."
        text="Tomamos la logica del negocio, sus etapas, responsables y datos clave para construir herramientas que acompañen la operacion real."
        image="/assets/images/rubros-software.jpg"
        alt="Diferentes rubros conectados por soluciones digitales"
      />

      <SectionIntro
        eyebrow="Aplicaciones"
        title="Soluciones para operaciones distintas"
        text="Cada organizacion tiene un flujo propio. Estos son algunos escenarios donde una web, sistema o automatizacion puede hacer una diferencia clara."
      />
      <section className="detail-grid">
        {industryCases.map((item) => (
          <article key={item.title}>
            <span>Rubro</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>
              {item.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="wide-panel">
        <div>
          <p className="eyebrow">Cobertura</p>
          <h2>Podemos partir de una web, un sistema interno o una integracion puntual</h2>
          <p>
            El punto de entrada depende del problema: captar mas consultas, ordenar pedidos,
            conectar informacion, automatizar tareas o crear una herramienta completa.
          </p>
        </div>
        <div className="pill-list">
          {industries.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <ContactBand title="Contanos tu rubro y armamos un mapa de solucion." />
    </main>
  );
}
