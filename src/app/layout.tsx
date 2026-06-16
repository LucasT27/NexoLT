import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nexolt.netlify.app'),
  title: 'NexoLT - Soluciones Digitales',
  description:
    'Sistemas, webs, automatizaciones e integraciones para equipos de cualquier rubro en Argentina.',
  openGraph: {
    title: 'NexoLT - Soluciones Digitales',
    description:
      'Ordena, automatiza y hace crecer tu operacion con soluciones digitales a medida.',
    url: 'https://nexolt.netlify.app/',
    siteName: 'NexoLT',
    images: ['/assets/social/og-image.jpg'],
    locale: 'es_AR',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
