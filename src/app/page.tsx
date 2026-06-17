import Image from 'next/image';
import Link from 'next/link';
import { ContactBand, SectionIntro, SplitFeature } from './components';
import { industries, integrations, process, projects, services, stats } from './data';

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Soluciones digitales para Argentina</p>
          <h1>Ordena, automatiza y hace crecer tu operacion.</h1>
          <p>
            Creamos sistemas, webs e integraciones para equipos de cualquier rubro que
            necesitan trabajar mejor, con informacion clara y procesos mas simples.
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" href="/contacto">
              Agendar una consulta
            </Link>
            <Link className="secondary-btn" href="/soluciones">
              Ver soluciones
            </Link>
          </div>
        </div>
        <figure className="hero-media">
          <Image
            src="/assets/images/hero-argentina-software.jpg"
            alt="Equipo trabajando con un sistema digital de gestion y automatizacion"
            width={1717}
            height={966}
            priority
          />
          <figcaption>
            <strong>+ control operativo</strong>
            <span>Sistemas, datos e integraciones en un solo flujo.</span>
          </figcaption>
        </figure>
      </section>

      <section className="stats" aria-label="Metricas de impacto">
        {stats.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <SectionIntro
        eyebrow="Vision general"
        title="Una web multipagina para explicar mejor cada solucion"
        text="La home resume la propuesta. Cada pagina desarrolla un tema con mas detalle para que el visitante entienda alcance, proceso y posibilidades."
      />
      <section className="card-grid">
        {services.map((service) => (
          <article className="feature-card" key={service.title}>
            <span>{service.label}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <Link href="/soluciones">Ver detalle</Link>
          </article>
        ))}
      </section>

      <SplitFeature
        eyebrow="Rubros"
        title="Tecnologia adaptable a distintas operaciones"
        text="No trabajamos para un unico tipo de negocio. Partimos de como opera cada equipo y diseñamos una solucion alrededor de ese flujo."
        image="/assets/images/rubros-software.jpg"
        alt="Collage de rubros con sistemas digitales aplicados a comercio, logistica, salud, educacion e industria"
      >
        <div className="pill-list">
          {industries.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <Link className="text-link" href="/rubros">
          Explorar rubros
        </Link>
      </SplitFeature>

      <SectionIntro
        eyebrow="Implementacion"
        title="De problema operativo a solucion funcionando"
        text="Un flujo claro para avanzar sin improvisar: entendemos, priorizamos, construimos, implementamos y mejoramos."
      />
      <section className="process-grid">
        {process.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <SplitFeature
        eyebrow="Integraciones"
        title="Conectamos las herramientas que ya usas"
        text="Unimos formularios, planillas, sistemas de gestion, pagos, mensajeria, reportes y APIs para que la informacion deje de viajar a mano."
        image="/assets/images/integraciones-sistemas.jpg"
        alt="Dashboard central conectado con modulos de pagos, mensajeria, datos, reportes y logistica"
        reverse
      >
        <div className="mini-grid">
          {integrations.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/integraciones">
          Ver integraciones
        </Link>
      </SplitFeature>

      <SectionIntro
        eyebrow="Proyectos"
        title="Casos pensados como sistemas, no como piezas sueltas"
        text="Ejemplos de soluciones que combinan analisis, interfaz, automatizacion e integracion para resolver una operacion completa."
      />
      <section className="project-grid">
        {projects.map(([type, title, text]) => (
          <article key={title}>
            <span>{type}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <ContactBand />
    </main>
  );
}
