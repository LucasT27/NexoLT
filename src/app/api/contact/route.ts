import { NextResponse } from 'next/server';

type ContactPayload = {
  nombre?: unknown;
  email?: unknown;
  mensaje?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: 'El cuerpo de la solicitud no es valido.' }, { status: 400 });
  }

  const nombre = String(payload.nombre || '').trim();
  const email = String(payload.email || '').trim();
  const mensaje = String(payload.mensaje || '').trim();

  if (nombre.length < 2) {
    return NextResponse.json({ message: 'Ingresa un nombre valido.' }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: 'Ingresa un email valido.' }, { status: 400 });
  }

  if (mensaje.length < 10) {
    return NextResponse.json({ message: 'Contanos un poco mas sobre tu consulta.' }, { status: 400 });
  }

  return NextResponse.json({
    message: 'Consulta recibida. Te vamos a responder pronto.',
    lead: {
      nombre,
      email,
      receivedAt: new Date().toISOString()
    }
  });
}
