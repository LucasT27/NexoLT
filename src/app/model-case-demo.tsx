'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';

type DemoType = 'commerce' | 'services' | 'automation';

const demos: Record<
  DemoType,
  {
    title: string;
    steps: string[];
    note: string;
  }
> = {
  commerce: {
    title: 'Pedido en movimiento',
    steps: ['Nuevo', 'Preparacion', 'Listo', 'Entregado'],
    note: 'Un pedido deja de estar perdido en chats y pasa por estados claros.'
  },
  services: {
    title: 'Lead con seguimiento',
    steps: ['Nuevo lead', 'Asignado', 'Contactado', 'Cerrado'],
    note: 'Cada consulta tiene responsable, estado y proximo paso visible.'
  },
  automation: {
    title: 'Flujo automatizado',
    steps: ['Dato recibido', 'Validado', 'Base actualizada', 'Aviso enviado'],
    note: 'La informacion avanza sola entre tareas repetitivas.'
  }
};

export function ModelCaseDemo({ type }: { type: DemoType }) {
  const demo = demos[type];
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((current) => (current + 1) % demo.steps.length);
  const previousStep = () =>
    setActiveStep((current) => (current - 1 + demo.steps.length) % demo.steps.length);

  return (
    <div
      className={`case-demo ${type}`}
      style={{ '--step': activeStep } as CSSProperties & Record<'--step', number>}
    >
      <div className="case-demo-header">
        <div>
          <span>Demo interactiva</span>
          <strong>{demo.title}</strong>
        </div>
        <div className="case-demo-controls">
          <button type="button" onClick={previousStep} aria-label="Paso anterior">
            Anterior
          </button>
          <button type="button" onClick={nextStep} aria-label="Paso siguiente">
            Siguiente
          </button>
        </div>
      </div>

      {type === 'automation' ? (
        <div className="flow-demo" aria-label={demo.title}>
          {demo.steps.map((step, index) => (
            <div className={index <= activeStep ? 'active' : ''} key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
          <i aria-hidden="true" />
        </div>
      ) : (
        <div className="board-demo" aria-label={demo.title}>
          {demo.steps.map((step, index) => (
            <div className={index === activeStep ? 'active' : ''} key={step}>
              <span>{step}</span>
              {index === activeStep ? (
                <strong>{type === 'commerce' ? 'Pedido #1042' : 'Consulta web'}</strong>
              ) : null}
            </div>
          ))}
        </div>
      )}

      <p>{demo.note}</p>
    </div>
  );
}
