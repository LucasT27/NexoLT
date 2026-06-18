import { ReactNode } from 'react';

export function FormOneShell({ children }: { children: ReactNode }) {
  return (
    <div className="form-one-shell">
      <div className="form-one-heading">
        <p className="eyebrow">Contacto</p>
        <h2>Hablemos de tu solucion.</h2>
        <p>
          Contanos el contexto y te respondemos con un primer camino posible,
          sin vueltas ni formularios eternos.
        </p>
      </div>
      {children}
    </div>
  );
}

export default FormOneShell;
