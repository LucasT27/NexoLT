import Image from 'next/image';
import Link from 'next/link';
import { ContactBand } from './components';
import { stats } from './data';
import { HomeDiagnostic } from './home-diagnostic';

const quickPaths = [
  ['Soluciones', 'Webs, sistemas e integraciones explicadas por tipo de necesidad.', '/soluciones'],
  ['Implementacion', 'Como pasamos de una idea a una solucion funcionando.', '/implementacion'],
  ['Contacto', 'Contanos tu caso y vemos el mejor punto de partida.', '/contacto']
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="home-hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">NexoLT</p>
          <h1>Tecnologia que ordena tu operacion.</h1>
          <p>
            Webs, sistemas e integraciones para equipos que quieren trabajar con menos
            tareas manuales, mas claridad y mejores datos.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#diagnostico">
              Empezar diagnostico
            </a>
            <Link className="secondary-btn" href="/soluciones">
              Ver soluciones
            </Link>
          </div>
        </div>
        <figure className="hero-media compact">
          <Image
            src="/assets/images/hero-argentina-software.jpg"
            alt="Equipo revisando una solucion digital para ordenar procesos"
            width={1717}
            height={966}
            priority
          />
          <figcaption>
            <strong>De problema a plan</strong>
            <span>Elegis una necesidad y te guiamos al siguiente paso.</span>
          </figcaption>
        </figure>
      </section>

      <div id="diagnostico">
        <HomeDiagnostic />
      </div>

      <section className="proof-strip" aria-label="Indicadores de trabajo">
        {stats.slice(0, 3).map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="quick-paths">
        <div>
          <p className="eyebrow">Seguir explorando</p>
          <h2>La home te orienta. Las paginas internas desarrollan.</h2>
        </div>
        <div>
          {quickPaths.map(([title, text, href]) => (
            <Link href={href} key={href}>
              <strong>{title}</strong>
              <span>{text}</span>
            </Link>
          ))}
        </div>
      </section>

      <ContactBand
        title="Tenes una necesidad concreta?"
        text="Mandanos el contexto y te respondemos con una forma simple de empezar."
      />
    </main>
  );
}
