import { Metadata } from 'next';
import { ContactForm } from '../contact-form';
import { faqs } from '../data';

export const metadata: Metadata = {
  title: 'Contacto - NexoLT',
  description: 'Contacta a NexoLT para desarrollar una web, sistema, automatizacion o integracion a medida.'
};

export default function ContactoPage() {
  return (
    <main>
      <section className="contact-page">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1>Contanos que queres ordenar, vender o automatizar.</h1>
          <p>
            Podemos empezar con una idea general, un proceso que hoy molesta o una necesidad
            concreta. Te respondemos con los proximos pasos posibles.
          </p>
        </div>
        <ContactForm />
      </section>

      <section className="faq-section">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2>Antes de empezar</h2>
        <div className="faq-grid">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
