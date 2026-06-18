'use client';

import { FormEvent, useState } from 'react';
import { FormOneShell } from '@/components/form-1';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formspreeEndpoint = 'https://formspree.io/f/mbdwbgag';

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
    const gotcha = String(formData.get('_gotcha') || '').trim();

    if (gotcha) {
      return;
    }

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

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre,
        email,
        mensaje,
        _gotcha: gotcha
      })
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
    <FormOneShell>
      <form className="contact-form" name="contacto" onSubmit={onSubmit} noValidate>
        <label className="bot-field">
          No completar
          <input name="_gotcha" tabIndex={-1} autoComplete="off" />
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
    </FormOneShell>
  );
}
