const DEFAULT_API_BASE_URL = "http://localhost:3000";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  DEFAULT_API_BASE_URL;

export function buildApiUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (typeof window !== "undefined") {
    return new URL(normalizedPath, window.location.origin).toString();
  }

  return new URL(normalizedPath, API_BASE_URL).toString();
}

export async function apiRequest(path, options = {}) {
  const response = await fetch(buildApiUrl(path), {
    ...options,
    cache: options.cache ?? "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Request failed for ${path}: ${response.status} ${errorText || response.statusText}`
    );
  }

  return response.json();
}
