// app/_lib/searchCookie.js
"use server";
import { cookies } from "next/headers";

const COOKIE_NAME = "lastFlightSearch";

export async function saveSearchCookie(params) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify(params), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export async function getSearchCookie() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
