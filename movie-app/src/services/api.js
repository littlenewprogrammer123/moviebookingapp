// src/services/api.js
const BASE = process.env.REACT_APP_API_BASE || "http://localhost:8080";
const BOOKING_URL = `${BASE}/api/bookings`;

async function readBody(res) {
  const contentType = res.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      return await res.json();
    } else {
      return await res.text();
    }
  } catch (e) {
    return `<<unreadable body: ${e.message}>>`;
  }
}

export async function createBooking(booking) {
  const res = await fetch(BOOKING_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });

  const body = await readBody(res);

  if (!res.ok) {
    // body might be object or string — stringify safe
    const bodyStr = typeof body === "string" ? body : JSON.stringify(body);
    throw new Error(`Create booking failed: ${res.status} ${res.statusText} - ${bodyStr}`);
  }

  return body;
}

export async function getBookings() {
  const res = await fetch(BOOKING_URL);
  if (!res.ok) {
    const body = await readBody(res);
    throw new Error(`Get bookings failed: ${res.status} ${JSON.stringify(body)}`);
  }
  return res.json ? res.json() : res.text();
}
