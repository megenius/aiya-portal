// secretCrypto.ts
const enc = new TextEncoder();
const dec = new TextDecoder();

function b64encode(u8: Uint8Array): string {
  return btoa(String.fromCharCode(...u8));
}

function b64decode(str: string): Uint8Array {
  return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
}

function normalizeSecret(secret: string): Uint8Array {
  try {
    const b = b64decode(secret);
    if (b.length === 32) return b;
  } catch (_) {}
  const bytes = enc.encode(secret);
  if (bytes.length !== 32) {
    throw new Error("secret ต้องมีขนาด 32 bytes หรือเป็น base64 ของ 32 bytes");
  }
  return bytes;
}

async function importAesGcmKey(secret: string): Promise<CryptoKey> {
  const raw = normalizeSecret(secret);
  return crypto.subtle.importKey("raw", raw, { name: "AES-GCM" }, false, [
    "encrypt",
    "decrypt",
  ]);
}

export async function encryptWithSecret(
  secret: string,
  plaintext: string
): Promise<string> {
  const key = await importAesGcmKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(plaintext)
  );
  const out = new Uint8Array(iv.length + ct.byteLength);
  out.set(iv, 0);
  out.set(new Uint8Array(ct), iv.length);
  return b64encode(out);
}

export async function decryptWithSecret(
  secret: string,
  b64: string
): Promise<string> {
  const key = await importAesGcmKey(secret);
  const full = b64decode(b64);
  const iv = full.slice(0, 12);
  const data = full.slice(12);
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  return dec.decode(pt);
}
