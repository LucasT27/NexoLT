import Image from 'next/image';
import Link from 'next/link';
import { ContactBand } from './components';
import { modelCases, stats } from './data';
import { HomeDiagnostic } from './home-diagnostic';

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

      <section className="model-preview">
        <div>
          <p className="eyebrow">Casos modelo</p>
          <h2>Escenarios tipicos, sin inventar clientes.</h2>
          <p>
            Ejemplos para imaginar como aplicamos tecnologia a problemas reales de operacion.
          </p>
        </div>
        <div className="model-preview-grid">
          {modelCases.map((item) => (
            <article key={item.title}>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.outcome}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/proyectos">
          Ver casos modelo
        </Link>
      </section>

      <section className="proof-strip" aria-label="Indicadores de trabajo">
        {stats.slice(0, 3).map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <ContactBand
        title="Tenes una necesidad concreta?"
        text="Mandanos el contexto y te respondemos con una forma simple de empezar."
      />
    </main>
  );
}
