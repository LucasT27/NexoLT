'use client';

import { useEffect, useState } from 'react';

type DemoType = 'fausto' | 'canna' | 'store' | 'streaming';

const demos: Record<
  DemoType,
  {
    title: string;
    subtitle: string;
    nav: string[];
    metrics: [string, string][];
    rows: [string, string, string][];
    feed: string[];
    note: string;
  }
> = {
  fausto: {
    title: 'Fausto Motos ERP',
    subtitle: 'Ventas, stock, caja y MercadoLibre',
    nav: ['Dashboard', 'Ventas', 'Stock', 'MercadoLibre', 'Caja'],
    metrics: [
      ['Hoy', '$ 428.500'],
      ['Pedidos', '18'],
      ['Stock bajo', '7'],
      ['Canales', '3']
    ],
    rows: [
      ['Pedido #1042', 'Mostrador', 'Preparacion'],
      ['Orden ML #8821', 'MercadoLibre', 'Pagada'],
      ['Kit transmision', 'WhatsApp', 'Reservado']
    ],
    feed: ['Stock sincronizado con ML', 'Caja diaria abierta', 'Cliente guardado en historial'],
    note: 'La demo muestra como los canales dejan de vivir separados y pasan a una operacion centralizada.'
  },
  canna: {
    title: 'CannaERP',
    subtitle: 'Hojas de vida, gestion y distribucion',
    nav: ['Panel', 'Hojas de vida', 'Finanzas', 'WhatsApp', 'Distribucion'],
    metrics: [
      ['Registros', '126'],
      ['Pendientes', '9'],
      ['Mensajes', '34'],
      ['Rutas', '5']
    ],
    rows: [
      ['HV-028', 'Seguimiento', 'Activo'],
      ['Distribucion Norte', 'Ruta', 'Programada'],
      ['Consulta WhatsApp', 'Soporte', 'Respondida']
    ],
    feed: ['Nueva hoja de vida cargada', 'Aviso enviado por WhatsApp', 'Movimiento financiero registrado'],
    note: 'La interfaz resume como una organizacion puede pasar de planillas dispersas a un sistema operativo unico.'
  },
  store: {
    title: 'HDV Store',
    subtitle: 'Ecommerce, usuarios y MercadoPago',
    nav: ['Tienda', 'Catalogo', 'Carrito', 'Pagos', 'Ordenes'],
    metrics: [
      ['Productos', '84'],
      ['Carritos', '12'],
      ['Pagos', '6'],
      ['Ordenes', '21']
    ],
    rows: [
      ['Campera importada', 'A pedido', 'En carrito'],
      ['Orden #3301', 'MercadoPago', 'Aprobada'],
      ['Webhook MP', 'Base de datos', 'Registrado']
    ],
    feed: ['Pago aprobado por MercadoPago', 'Orden creada automaticamente', 'Deploy publicado por CI/CD'],
    note: 'La demo simula el camino completo desde catalogo hasta orden registrada sin carga manual posterior.'
  },
  streaming: {
    title: 'HDV Streaming',
    subtitle: 'Contenido deportivo automatizado',
    nav: ['Partidos', 'Flyers', 'Captions', 'Publicacion', 'Reporte'],
    metrics: [
      ['Partidos', '14'],
      ['Flyers', '14'],
      ['Captions', '14'],
      ['Redes', '4']
    ],
    rows: [
      ['Partido del dia', 'Procesado', 'Listo'],
      ['Flyer personalizado', 'Generado', 'Aprobado'],
      ['Post Instagram', 'Programado', 'Publicado']
    ],
    feed: ['Fixture procesado', 'Caption redactado', 'Contenido publicado en redes'],
    note: 'El flujo muestra una automatizacion end-to-end que produce y publica contenido sin intervencion manual.'
  }
};

export function ModelCaseDemo({ type }: { type: DemoType }) {
  const demo = demos[type];
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % demo.nav.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [demo.nav.length]);

  const nextScreen = () => setActiveScreen((current) => (current + 1) % demo.nav.length);
  const previousScreen = () =>
    setActiveScreen((current) => (current - 1 + demo.nav.length) % demo.nav.length);

  return (
    <div className={`case-demo software-demo ${type}`}>
      <div className="case-demo-header">
        <div>
          <span>Software en accion</span>
          <strong>{demo.title}</strong>
        </div>
        <div className="case-demo-controls">
          <button type="button" onClick={previousScreen} aria-label="Pantalla anterior">
            Anterior
          </button>
          <button type="button" onClick={nextScreen} aria-label="Pantalla siguiente">
            Siguiente
          </button>
        </div>
      </div>

      <div className="device-demo" aria-label={`${demo.title} navegando por modulos`}>
        <div className="device-top">
          <i />
          <i />
          <i />
          <strong>{demo.subtitle}</strong>
        </div>
        <div className="software-screen">
          <aside>
            {demo.nav.map((item, index) => (
              <button
                className={index === activeScreen ? 'active' : ''}
                key={item}
                onClick={() => setActiveScreen(index)}
                type="button"
              >
                {item}
              </button>
            ))}
          </aside>
          <section>
            <div className="screen-heading">
              <span>{demo.nav[activeScreen]}</span>
              <strong>{demo.title}</strong>
            </div>
            <div className="software-metrics">
              {demo.metrics.map(([value, label]) => (
                <article key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
            <div className="software-table">
              {demo.rows.map(([name, source, status], index) => (
                <div className={index === activeScreen % demo.rows.length ? 'active' : ''} key={name}>
                  <strong>{name}</strong>
                  <span>{source}</span>
                  <em>{status}</em>
                </div>
              ))}
            </div>
          </section>
          <div className="software-feed">
            {demo.feed.map((item, index) => (
              <span className={index === activeScreen % demo.feed.length ? 'active' : ''} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p>{demo.note}</p>
    </div>
  );
}
