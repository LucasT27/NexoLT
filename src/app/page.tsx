import Image from 'next/image';
import Link from 'next/link';
import { ContactBand, SectionIntro, SplitFeature } from './components';
import { homeCapabilities, homeOutcomes, homeSignals, stats } from './data';

const routes = [
  ['Soluciones', 'Webs, sistemas e integraciones a medida.', '/soluciones'],
  ['Rubros', 'Como adaptamos tecnologia a operaciones distintas.', '/rubros'],
  ['Implementacion', 'El proceso desde diagnostico hasta salida en vivo.', '/implementacion'],
  ['Proyectos', 'Ejemplos de casos que podemos desarrollar.', '/proyectos']
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Soluciones digitales para Argentina</p>
          <h1>Tecnologia que ordena la operacion, no que suma ruido.</h1>
          <p>
            Ayudamos a equipos de cualquier rubro a convertir procesos dispersos en
            sistemas, webs e integraciones que se usan todos los dias.
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" href="/contacto">
              Agendar una consulta
            </Link>
            <Link className="secondary-btn" href="/implementacion">
              Ver como trabajamos
            </Link>
          </div>
        </div>
        <figure className="hero-media">
          <Image
            src="/assets/images/hero-argentina-software.jpg"
            alt="Equipo revisando una solucion digital para ordenar procesos operativos"
            width={1717}
            height={966}
            priority
          />
          <figcaption>
            <strong>Operacion conectada</strong>
            <span>Web, datos, automatizacion e integraciones trabajando en conjunto.</span>
          </figcaption>
        </figure>
      </section>

      <section className="home-problem">
        <div>
          <p className="eyebrow">Cuando llamar a NexoLT</p>
          <h2>Si el negocio crece, pero los procesos quedaron atados con parches.</h2>
        </div>
        <div className="signal-grid">
          {homeSignals.map((signal) => (
            <article key={signal.title}>
              <h3>{signal.title}</h3>
              <p>{signal.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats" aria-label="Metricas de impacto">
        {stats.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <SplitFeature
        eyebrow="Enfoque"
        title="Diseñamos alrededor del flujo real de trabajo"
        text="Antes de escribir codigo, entendemos que pasa entre una consulta, una venta, una tarea, una entrega o un reporte. Desde ahi decidimos si conviene una web, un sistema, una automatizacion o una integracion."
        image="/assets/images/integraciones-sistemas.jpg"
        alt="Mapa de sistemas conectados con datos, reportes e integraciones"
        reverse
      >
        <div className="outcome-list">
          {homeOutcomes.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </article>
          ))}
        </div>
      </SplitFeature>

      <SectionIntro
        eyebrow="Capacidades"
        title="Un equipo para convertir necesidades operativas en producto digital"
        text="La home te muestra el criterio. Las paginas internas desarrollan cada linea de trabajo con mas detalle."
      />
      <section className="capability-rail">
        {homeCapabilities.map(([title, text]) => (
          <article key={title}>
            <span>{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="route-grid">
        <div>
          <p className="eyebrow">Explorar</p>
          <h2>Elegí por donde profundizar</h2>
          <p>
            Cada seccion desarrolla una parte distinta: que podemos construir, para que
            rubros, como integramos herramientas y como implementamos.
          </p>
        </div>
        <div>
          {routes.map(([title, text, href]) => (
            <Link href={href} key={href}>
              <strong>{title}</strong>
              <span>{text}</span>
            </Link>
          ))}
        </div>
      </section>

      <ContactBand title="Contanos que proceso queres ordenar primero." />
    </main>
  );
}
