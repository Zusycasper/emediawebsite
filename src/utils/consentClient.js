export function getOrCreateSessionUuid() {
  let uuid = localStorage.getItem('session_uuid');
  if (!uuid) {
    uuid = crypto.randomUUID ? crypto.randomUUID() : generateFallbackUuid();
    localStorage.setItem('session_uuid', uuid);
  }
  return uuid;
}

function generateFallbackUuid() {
  return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Send minimal, anonymized analytics to server
 * - No cookies
 * - No personal data
 * - Uses session UUID for grouping
 */
export async function logVisitorActivity(page) {
  const sessionUuid = getOrCreateSessionUuid();
  const body = {
    session_uuid: sessionUuid,
    page,
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch('/api/log_visitor.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.warn('Visitor log failed:', err);
  }
}

/**
 * Consent tracking (existing)
 */
export async function sendConsentToServer({
  sessionUuid,
  userId = null,
  choices,
  status = null,
  source = 'website',
}) {
  const body = {
    session_uuid: sessionUuid,
    user_id: userId,
    choices,
    status,
    source,
  };

  const res = await fetch('/api/save_consent.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  return res.json();
}
