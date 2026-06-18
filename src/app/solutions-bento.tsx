'use client';

import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid';
import { Bot, Database, Globe2, PlugZap } from 'lucide-react';

const items: BentoItem[] = [
  {
    title: 'Sistemas internos',
    meta: 'Gestion',
    description: 'Paneles para clientes, pedidos, stock, tareas, estados y reportes operativos.',
    icon: <Database className="h-4 w-4 text-[#007d5b]" />,
    status: 'Base',
    tags: ['procesos', 'datos', 'roles'],
    colSpan: 2,
    hasPersistentHover: true
  },
  {
    title: 'Web comercial',
    meta: 'Conversion',
    description: 'Sitios claros, rapidos y conectados a consultas reales.',
    icon: <Globe2 className="h-4 w-4 text-[#007d5b]" />,
    status: 'Visible',
    tags: ['marca', 'leads']
  },
  {
    title: 'Automatizaciones',
    meta: 'IA + reglas',
    description: 'Flujos que validan, clasifican y avisan sin copiar datos a mano.',
    icon: <Bot className="h-4 w-4 text-[#007d5b]" />,
    status: 'Ahorro',
    tags: ['alertas', 'tareas'],
    colSpan: 2
  },
  {
    title: 'Integraciones',
    meta: 'APIs',
    description: 'Conexiones entre formularios, pagos, planillas, CRM y sistemas propios.',
    icon: <PlugZap className="h-4 w-4 text-[#007d5b]" />,
    status: 'Conectado',
    tags: ['api', 'crm']
  }
];

export function SolutionsBento() {
  return (
    <section className="solutions-bento" aria-label="Resumen visual de soluciones">
      <BentoGrid items={items} />
    </section>
  );
}
