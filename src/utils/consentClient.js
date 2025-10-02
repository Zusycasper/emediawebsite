export function getOrCreateSessionUuid() {
  let uuid = localStorage.getItem('consent_session_uuid');
  if (!uuid) {
    uuid = crypto.randomUUID ? crypto.randomUUID() : generateFallbackUuid();
    localStorage.setItem('consent_session_uuid', uuid);
  }
  return uuid;
}

function generateFallbackUuid() {
  // simple fallback for older browsers
  return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export async function sendConsentToServer({ sessionUuid, userId = null, choices, status = null, source = 'website' }) {
  const body = { session_uuid: sessionUuid, user_id: userId, choices, status, source };
  const res = await fetch('/api/consent.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body)
  });
  return res.json();
}
