'use client';

import { FormEvent, useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nombre = String(formData.get('nombre') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const mensaje = String(formData.get('mensaje') || '').trim();

    if (nombre.length < 2) {
      setState('error');
      setMessage('Ingresa un nombre valido.');
      return;
    }

    if (!emailPattern.test(email)) {
      setState('error');
      setMessage('Ingresa un email valido.');
      return;
    }

    if (mensaje.length < 10) {
      setState('error');
      setMessage('Contanos un poco mas sobre tu consulta.');
      return;
    }

    setState('loading');
    setMessage('Enviando consulta...');
    formData.set('form-name', 'contacto');
    const encoded = new URLSearchParams();
    formData.forEach((value, key) => encoded.append(key, String(value)));

    const response = await fetch('/', {
      method: 'POST',
      body: encoded.toString(),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    if (!response.ok) {
      setState('error');
      setMessage('No pudimos enviar la consulta. Proba de nuevo en unos segundos.');
      return;
    }

    setState('success');
    setMessage('Consulta recibida. Te vamos a responder pronto.');
    form.reset();
  }

  return (
    <form
      className="contact-form"
      name="contacto"
      onSubmit={onSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      noValidate
    >
      <input type="hidden" name="form-name" value="contacto" />
      <label className="bot-field">
        No completar
        <input name="bot-field" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Nombre
        <input name="nombre" required minLength={2} placeholder="Tu nombre" />
      </label>
      <label>
        Email
        <input name="email" type="email" required placeholder="tu@email.com" />
      </label>
      <label>
        Mensaje
        <textarea
          name="mensaje"
          required
          minLength={10}
          placeholder="Contanos brevemente tu situacion..."
        />
      </label>
      <p className={`form-status ${state}`} role="status" aria-live="polite">
        {message}
      </p>
      <button type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? 'Enviando...' : 'Enviar consulta'}
      </button>
    </form>
  );
}
