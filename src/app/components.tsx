import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ContactForm } from './contact-form';

export const navItems = [
  ['Soluciones', '/soluciones'],
  ['Rubros', '/rubros'],
  ['Integraciones', '/integraciones'],
  ['Implementacion', '/implementacion'],
  ['Proyectos', '/proyectos']
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="NexoLT inicio">
        Nexo<span>LT</span>
      </Link>
      <nav aria-label="Navegacion principal">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contacto">
        Hablemos
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" href="/" aria-label="NexoLT inicio">
          Nexo<span>LT</span>
        </Link>
        <p>Soluciones digitales para ordenar, automatizar e integrar operaciones.</p>
      </div>
      <nav aria-label="Navegacion secundaria">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        <Link href="/contacto">Contacto</Link>
      </nav>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  alt
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className={`page-hero ${image ? '' : 'plain'}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {image ? (
        <Image src={image} alt={alt || ''} width={1717} height={966} priority />
      ) : null}
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  id
}: {
  eyebrow: string;
  title: string;
  text: string;
  id?: string;
}) {
  return (
    <section className="section-intro" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}

export function SplitFeature({
  eyebrow,
  title,
  text,
  image,
  alt,
  reverse = false,
  children
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`media-section ${reverse ? 'reverse' : ''}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
      <Image src={image} alt={alt} width={1717} height={966} />
    </section>
  );
}

export function ContactBand({
  title = 'Transformemos una idea en una solucion real.',
  text = 'Contanos que proceso queres ordenar o automatizar. No hace falta tener todo claro para empezar.'
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="final-cta" id="contacto">
      <div>
        <p className="eyebrow">Proximo paso</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <ContactForm />
    </section>
  );
}
