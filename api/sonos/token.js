/**
 * Sonos OAuth token proxy for the Sonos Widget Android app.
 *
 * Sonos's token endpoint authenticates the client with HTTP Basic
 * (client id + secret). A secret compiled into an APK can be extracted by
 * anyone holding the APK, so the app posts here instead and this function adds
 * the credentials from Vercel environment variables (SONOS_CLIENT_ID,
 * SONOS_CLIENT_SECRET). The secret never leaves the server.
 *
 * Accepts exactly the two grants the app uses, with redirect_uri fixed
 * server-side:
 *   grant_type=authorization_code&code=…
 *   grant_type=refresh_token&refresh_token=…
 *
 * A caller still needs a code or refresh token Sonos issued to this client,
 * so the endpoint grants nothing an attacker does not already hold. Nothing
 * here logs request or response bodies: they carry live tokens.
 */

const SONOS_TOKEN_URL = 'https://api.sonos.com/login/v3/oauth/access';
const REDIRECT_URI = 'https://sycamorecreekconsulting.com/callback';
const MAX_BODY_BYTES = 8 * 1024;
// Opaque OAuth tokens: URL-safe / base64 characters only, bounded length.
const TOKEN_RE = /^[A-Za-z0-9._~+/=-]{1,2048}$/;

const json = (status, body) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });

/** Parse a form-encoded or JSON body into a plain object; null if unreadable. */
async function readParams(request) {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return null;
    const type = request.headers.get('content-type') || '';
    if (type.includes('application/x-www-form-urlencoded')) {
        return Object.fromEntries(new URLSearchParams(raw));
    }
    if (type.includes('application/json')) {
        try {
            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === 'object' ? parsed : null;
        } catch {
            return null;
        }
    }
    return null;
}

/** Build the upstream form for an allowed grant, or null if the input is invalid. */
function upstreamForm(params) {
    if (params.grant_type === 'authorization_code' && TOKEN_RE.test(params.code ?? '')) {
        return new URLSearchParams({
            grant_type: 'authorization_code',
            code: params.code,
            redirect_uri: REDIRECT_URI,
        });
    }
    if (params.grant_type === 'refresh_token' && TOKEN_RE.test(params.refresh_token ?? '')) {
        return new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: params.refresh_token,
        });
    }
    return null;
}

export async function POST(request) {
    const { SONOS_CLIENT_ID: id, SONOS_CLIENT_SECRET: secret } = process.env;
    if (!id || !secret) return json(503, { error: 'not_configured' });

    const params = await readParams(request);
    const form = params && upstreamForm(params);
    if (!form) return json(400, { error: 'invalid_request' });

    let upstream;
    try {
        upstream = await fetch(SONOS_TOKEN_URL, {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + Buffer.from(`${id}:${secret}`).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            },
            body: form,
            signal: AbortSignal.timeout(10_000),
        });
    } catch {
        return json(502, { error: 'upstream_unavailable' });
    }

    // Pass Sonos's status and JSON through (tokens on success, OAuth error
    // codes such as invalid_grant on failure) so the app's handling is unchanged.
    let body;
    try {
        body = await upstream.json();
    } catch {
        return json(502, { error: 'upstream_invalid_response' });
    }
    return json(upstream.status, body);
}

export function GET() {
    return json(405, { error: 'method_not_allowed' });
}
