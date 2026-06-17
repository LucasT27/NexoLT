'use client';

import Link from 'next/link';
import { useState } from 'react';
import { diagnosticOptions } from './data';

type DiagnosticId = (typeof diagnosticOptions)[number]['id'];

export function HomeDiagnostic() {
  const [activeId, setActiveId] = useState<DiagnosticId>(diagnosticOptions[0].id);
  const active = diagnosticOptions.find((option) => option.id === activeId) || diagnosticOptions[0];

  return (
    <section className="diagnostic-panel" aria-labelledby="diagnostic-title">
      <div className="diagnostic-copy">
        <p className="eyebrow">Diagnostico rapido</p>
        <h2 id="diagnostic-title">Que queres resolver primero?</h2>
        <p>
          Elegi la situacion mas cercana. La recomendacion cambia en vivo y te lleva a la
          pagina donde esta explicado con mas detalle.
        </p>
        <div className="diagnostic-options" role="tablist" aria-label="Problemas frecuentes">
          {diagnosticOptions.map((option) => (
            <button
              aria-selected={option.id === active.id}
              className={option.id === active.id ? 'active' : ''}
              key={option.id}
              onClick={() => setActiveId(option.id)}
              role="tab"
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <article className="diagnostic-result">
        <span>Recomendacion</span>
        <strong>{active.recommendation}</strong>
        <h3>{active.title}</h3>
        <p>{active.text}</p>
        <div className="diagnostic-actions">
          <Link className="primary-btn" href="/contacto">
            Pedir diagnostico
          </Link>
          <Link className="secondary-btn" href={active.href}>
            {active.cta}
          </Link>
        </div>
      </article>
    </section>
  );
}
