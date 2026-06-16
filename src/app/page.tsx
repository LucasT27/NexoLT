import Image from 'next/image';
import { ContactForm } from './contact-form';
import { industries, integrations, process, projects, services, stats } from './data';

const nav = [
  ['Servicios', '#servicios'],
  ['Rubros', '#rubros'],
  ['Integraciones', '#integraciones'],
  ['Enfoque', '#enfoque'],
  ['Contacto', '#contacto']
] as const;

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="NexoLT inicio">
          Nexo<span>LT</span>
        </a>
        <nav aria-label="Navegacion principal">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contacto">
          Hablemos
        </a>
      </header>

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
              <a className="primary-btn" href="#contacto">
                Agendar una consulta
              </a>
              <a className="secondary-btn" href="#rubros">
                Ver rubros
              </a>
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
          id="servicios"
          eyebrow="Servicios"
          title="Soluciones para ordenar el trabajo diario"
          text="Combinamos analisis, desarrollo e integraciones para convertir problemas operativos en herramientas concretas."
        />
        <section className="card-grid">
          {services.map((service) => (
            <article className="feature-card" key={service.title}>
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </section>

        <MediaSection
          id="rubros"
          eyebrow="Rubros"
          title="Tecnologia para equipos de cualquier rubro"
          text="No trabajamos para un unico tipo de negocio. Adaptamos sistemas, webs e integraciones al modo real en que opera cada organizacion."
          image="/assets/images/rubros-software.jpg"
          alt="Collage de rubros con sistemas digitales aplicados a comercio, logistica, salud, educacion e industria"
        >
          <div className="pill-list">
            {industries.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </MediaSection>

        <SectionIntro
          id="enfoque"
          eyebrow="Enfoque"
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

        <MediaSection
          id="integraciones"
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
        </MediaSection>

        <SectionIntro
          id="proyectos"
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

        <section className="final-cta" id="contacto">
          <div>
            <p className="eyebrow">Proximo paso</p>
            <h2>Transformemos una idea en una solucion real.</h2>
            <p>
              Contanos que proceso queres ordenar o automatizar. No hace falta tener
              todo claro para empezar.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
    </>
  );
}

function SectionIntro({
  id,
  eyebrow,
  title,
  text
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="section-intro" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

function MediaSection({
  id,
  eyebrow,
  title,
  text,
  image,
  alt,
  reverse = false,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`media-section ${reverse ? 'reverse' : ''}`} id={id}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
      <Image src={image} alt={alt} width={1717} height={966} />
    </section>
  );
}
