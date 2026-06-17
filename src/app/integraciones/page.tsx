import { Metadata } from 'next';
import { ContactBand, PageHero, SectionIntro, SplitFeature } from '../components';
import { integrationDetails } from '../data';

export const metadata: Metadata = {
  title: 'Integraciones - NexoLT',
  description: 'Conectamos formularios, pagos, WhatsApp, planillas, APIs y sistemas para automatizar operaciones.'
};

export default function IntegracionesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Integraciones"
        title="La informacion no deberia viajar a mano."
        text="Conectamos las herramientas que ya usas para que consultas, pagos, datos, estados y alertas se muevan con menos errores y mas velocidad."
        image="/assets/images/integraciones-sistemas.jpg"
        alt="Integraciones entre sistemas, pagos, mensajes, datos y reportes"
      />

      <SectionIntro
        eyebrow="Conexiones posibles"
        title="Una operacion mas fluida entre sistemas"
        text="El objetivo es reducir carga manual, duplicacion de datos y puntos ciegos entre areas."
      />
      <section className="detail-grid compact">
        {integrationDetails.map(([title, text]) => (
          <article key={title}>
            <span>API</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <SplitFeature
        eyebrow="Metodo"
        title="Integramos sin romper lo que ya funciona"
        text="Revisamos disponibilidad de APIs, permisos, limites, seguridad y alternativas. Cuando una herramienta no ofrece integracion directa, buscamos caminos estables como webhooks, exportaciones o procesos intermedios."
        image="/assets/images/hero-argentina-software.jpg"
        alt="Equipo revisando flujos digitales e integraciones"
      >
        <div className="mini-grid">
          <article>
            <strong>Contrato claro</strong>
            <span>Definimos que datos entran, que datos salen y como se manejan errores.</span>
          </article>
          <article>
            <strong>Seguridad</strong>
            <span>No exponemos credenciales y cuidamos permisos, validaciones y trazabilidad.</span>
          </article>
        </div>
      </SplitFeature>

      <ContactBand title="Conectemos tus herramientas en un flujo mas simple." />
    </main>
  );
}
