import type { Metadata } from 'next';
import { Inter, Manrope, Geist } from 'next/font/google';
import { SiteFooter, SiteHeader } from './components';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

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
    <html lang="es-AR" className={cn("font-sans", geist.variable)}>
      <body className={`${manrope.variable} ${inter.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
