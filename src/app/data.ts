export const services = [
  {
    label: 'Sistemas',
    title: 'Sistemas a medida',
    text: 'Herramientas internas para administrar operaciones, clientes, stock, reportes o cualquier flujo propio.'
  },
  {
    label: 'Web',
    title: 'Desarrollo web',
    text: 'Sitios y plataformas claras, rapidas y pensadas para convertir presencia digital en una herramienta comercial.'
  },
  {
    label: 'IA',
    title: 'Automatizaciones',
    text: 'Flujos que reducen tareas repetitivas, ordenan datos y aceleran decisiones sin sumar complejidad.'
  },
  {
    label: 'API',
    title: 'Integraciones',
    text: 'Conectamos sistemas para que la informacion fluya entre ventas, operaciones, soporte y administracion.'
  }
];

export const serviceDetails = [
  {
    label: 'Gestion',
    title: 'Sistemas internos para operar mejor',
    text: 'Creamos paneles, flujos y herramientas que reemplazan planillas dispersas, mensajes sueltos y tareas manuales.',
    bullets: ['Clientes, pedidos y estados', 'Stock, turnos o recursos', 'Reportes operativos', 'Roles y permisos']
  },
  {
    label: 'Web',
    title: 'Sitios y plataformas con foco comercial',
    text: 'Diseñamos experiencias claras para presentar servicios, captar consultas y mostrar valor sin perder velocidad.',
    bullets: ['Sitios institucionales', 'Landing pages', 'Catalogos digitales', 'Paneles privados']
  },
  {
    label: 'Automatizacion',
    title: 'Menos tareas repetitivas, mas control',
    text: 'Conectamos formularios, mensajes, bases y alertas para que la informacion avance sin depender de copiar y pegar.',
    bullets: ['Emails y WhatsApp', 'Alertas internas', 'Carga de datos', 'Clasificacion con IA']
  },
  {
    label: 'Integraciones',
    title: 'Herramientas conectadas en un flujo unico',
    text: 'Unimos APIs, planillas, pagos, CRMs y sistemas existentes para reducir errores y mejorar seguimiento.',
    bullets: ['APIs externas', 'Pasarelas de pago', 'CRM y formularios', 'Dashboards de datos']
  }
];

export const stats = [
  ['18+', 'Procesos automatizados'],
  ['240+', 'Horas ahorradas al mes'],
  ['32+', 'Integraciones creadas'],
  ['12+', 'Proyectos entregados']
] as const;

export const homeSignals = [
  {
    title: 'Cuando la informacion esta repartida',
    text: 'Ventas, administracion y operacion trabajan con datos distintos. Centralizamos estados, responsables y seguimiento.'
  },
  {
    title: 'Cuando todo depende de tareas manuales',
    text: 'Copiar datos, reenviar mensajes y actualizar planillas consume horas. Automatizamos pasos repetitivos y avisos.'
  },
  {
    title: 'Cuando la web no acompaña al negocio',
    text: 'El sitio existe, pero no explica bien, no convierte o no se conecta con ningun proceso posterior.'
  }
];

export const homeOutcomes = [
  ['Visibilidad', 'Tableros y estados para entender que pasa sin pedir reportes manuales.'],
  ['Velocidad', 'Flujos digitales que reducen espera, errores y pasos innecesarios.'],
  ['Continuidad', 'Soluciones pensadas para crecer por modulos sin rehacer todo.']
] as const;

export const homeCapabilities = [
  ['Diagnosticar', 'Mapear procesos, usuarios, datos y oportunidades.'],
  ['Diseñar', 'Convertir flujos confusos en interfaces claras.'],
  ['Construir', 'Crear webs, sistemas internos e integraciones.'],
  ['Acompañar', 'Probar, desplegar, medir y mejorar con uso real.']
] as const;

export const diagnosticOptions = [
  {
    id: 'manual',
    label: 'Procesos manuales',
    title: 'Necesitas automatizar pasos repetitivos.',
    text: 'Cuando el equipo copia datos, reenvia mensajes o actualiza planillas a mano, conviene empezar por mapear el flujo y detectar que puede resolverse con automatizaciones simples.',
    recommendation: 'Automatizacion + integraciones',
    href: '/integraciones',
    cta: 'Ver integraciones'
  },
  {
    id: 'web',
    label: 'Una web que venda mejor',
    title: 'Necesitas una presencia digital mas clara.',
    text: 'Si la web no explica, no convierte o no conecta con ningun proceso posterior, el punto de partida es una experiencia comercial mas precisa y medible.',
    recommendation: 'Web comercial + formulario conectado',
    href: '/soluciones',
    cta: 'Ver soluciones'
  },
  {
    id: 'tools',
    label: 'Herramientas desconectadas',
    title: 'Necesitas que la informacion fluya.',
    text: 'Cuando ventas, administracion y operacion trabajan con datos distintos, conviene conectar formularios, pagos, planillas, mensajes o sistemas existentes.',
    recommendation: 'Integraciones y datos',
    href: '/integraciones',
    cta: 'Explorar integraciones'
  },
  {
    id: 'system',
    label: 'Sistema interno',
    title: 'Necesitas una herramienta propia.',
    text: 'Si el negocio ya tiene un proceso particular que ninguna herramienta resuelve bien, se puede construir un sistema interno por modulos.',
    recommendation: 'Sistema a medida',
    href: '/proyectos',
    cta: 'Ver proyectos'
  },
  {
    id: 'unknown',
    label: 'No se por donde empezar',
    title: 'Necesitas un diagnostico corto.',
    text: 'Cuando todavia no esta claro si hace falta web, sistema o automatizacion, empezamos por ordenar problemas, prioridades e impacto esperado.',
    recommendation: 'Diagnostico inicial',
    href: '/implementacion',
    cta: 'Ver implementacion'
  }
] as const;

export const industries = [
  'Comercio',
  'Servicios',
  'Logistica',
  'Salud',
  'Educacion',
  'Industria',
  'Administracion',
  'Equipos internos'
];

export const industryCases = [
  {
    title: 'Comercio y ventas',
    text: 'Catalogos, pedidos, stock, cajas, seguimientos y reportes para vender con mas orden.',
    examples: ['Mayoristas', 'Locales', 'Ecommerce', 'Equipos comerciales']
  },
  {
    title: 'Servicios profesionales',
    text: 'Gestion de turnos, clientes, presupuestos, tareas, entregables y comunicacion postventa.',
    examples: ['Consultoras', 'Estudios', 'Soporte tecnico', 'Capacitacion']
  },
  {
    title: 'Operaciones y logistica',
    text: 'Flujos para coordinar pedidos, recursos, entregas, incidencias y trazabilidad operativa.',
    examples: ['Depositos', 'Distribucion', 'Mantenimiento', 'Campo']
  },
  {
    title: 'Equipos internos',
    text: 'Herramientas para ordenar aprobaciones, cargas, tableros, documentos y reportes.',
    examples: ['Administracion', 'RRHH', 'Finanzas', 'Direccion']
  }
];

export const process = [
  ['01', 'Diagnostico', 'Mapeamos procesos, usuarios, datos y fricciones para entender el problema real.'],
  ['02', 'Propuesta', 'Definimos alcance, impacto esperado y camino tecnico con prioridades claras.'],
  ['03', 'Desarrollo', 'Construimos en ciclos cortos con validaciones frecuentes y foco en uso real.'],
  ['04', 'Implementacion', 'Preparamos deploy, pruebas, capacitacion y transicion operativa.'],
  ['05', 'Mejora continua', 'Medimos uso, detectamos oportunidades y evolucionamos el sistema.']
] as const;

export const integrations = [
  ['Pagos', 'Operaciones y cobros conectados.'],
  ['WhatsApp y email', 'Avisos, seguimientos y respuestas.'],
  ['Planillas y datos', 'Informacion ordenada y sincronizada.'],
  ['APIs y sistemas', 'Conexiones a medida entre plataformas.']
] as const;

export const integrationDetails = [
  ['Formularios', 'Captura de leads, consultas, solicitudes y datos operativos con validacion.'],
  ['Pagos', 'Mercado Pago, links de cobro, conciliacion y estados de pago.'],
  ['Mensajeria', 'WhatsApp, email, avisos internos y seguimiento automatico.'],
  ['Datos', 'Planillas, bases internas, reportes y tableros para tomar decisiones.'],
  ['Sistemas existentes', 'CRMs, ERPs, plataformas de turnos, ecommerce y herramientas propias.'],
  ['APIs a medida', 'Contratos claros para conectar piezas nuevas sin rehacer todo el sistema.']
] as const;

export const projects = [
  ['ERP operativo', 'Proyecto ERP', 'Panel centralizado para ventas, stock, clientes y reportes.'],
  ['Web comercial', 'Proyecto Web', 'Landing premium con foco en conversion y claridad de propuesta.'],
  ['Workflow', 'Proyecto Automatizacion', 'Flujos entre formularios, CRM, notificaciones y bases internas.'],
  ['Bot / IA', 'Proyecto Bot / IA', 'Asistente interno para clasificar consultas y derivar casos con contexto.']
] as const;

export const implementationSteps = [
  {
    number: '01',
    title: 'Relevamiento',
    text: 'Entendemos objetivos, usuarios, tareas, datos y puntos de dolor antes de proponer tecnologia.'
  },
  {
    number: '02',
    title: 'Mapa de solucion',
    text: 'Definimos modulos, prioridades, integraciones, riesgos y un primer alcance entregable.'
  },
  {
    number: '03',
    title: 'Diseño y prototipo',
    text: 'Bajamos la idea a pantallas y flujos para validar experiencia antes de desarrollar.'
  },
  {
    number: '04',
    title: 'Desarrollo iterativo',
    text: 'Construimos por etapas, probamos con casos reales y ajustamos con feedback concreto.'
  },
  {
    number: '05',
    title: 'Salida en vivo',
    text: 'Preparamos deploy, pruebas, capacitacion y acompañamiento para que el equipo pueda usarlo.'
  }
];

export const faqs = [
  ['¿Trabajan solo con PyMEs?', 'No. Adaptamos el alcance a cualquier rubro, equipo u operacion que necesite ordenar procesos digitales.'],
  ['¿Pueden integrarse con herramientas que ya usamos?', 'Si. Primero revisamos APIs, exportaciones o alternativas viables y despues definimos el camino mas estable.'],
  ['¿Hacen sitios web o sistemas completos?', 'Ambos. Podemos crear una web comercial, una plataforma interna o una solucion que combine las dos cosas.'],
  ['¿Como empieza un proyecto?', 'Con una consulta inicial, relevamiento y propuesta de alcance. No hace falta tener todo definido desde el primer dia.']
] as const;
