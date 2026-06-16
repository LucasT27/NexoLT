'use client';

import { FormEvent, useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setState('loading');
    setMessage('Enviando consulta...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });

    const payload = (await response.json()) as { message?: string };

    if (!response.ok) {
      setState('error');
      setMessage(payload.message || 'Revisa los datos e intenta nuevamente.');
      return;
    }

    setState('success');
    setMessage(payload.message || 'Consulta recibida. Te vamos a responder pronto.');
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
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
