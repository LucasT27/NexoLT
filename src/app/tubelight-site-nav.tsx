'use client';

import { NavBar } from '@/components/ui/tubelight-navbar';
import { FolderKanban, Home, Layers3, PlugZap, Route, Sparkles } from 'lucide-react';

const items = [
  { name: 'Inicio', url: '/', icon: Home },
  { name: 'Soluciones', url: '/soluciones', icon: Sparkles },
  { name: 'Rubros', url: '/rubros', icon: Layers3 },
  { name: 'Integraciones', url: '/integraciones', icon: PlugZap },
  { name: 'Implementacion', url: '/implementacion', icon: Route },
  { name: 'Proyectos', url: '/proyectos', icon: FolderKanban }
];

export function TubelightSiteNav() {
  return <NavBar items={items} mode="inline" className="site-tubelight-nav" />;
}
