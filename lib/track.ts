export async function track(event: string, props: Record<string, unknown> = {}) {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ event, props, ts: Date.now() }),
    });
  } catch {
    console.log("[track fallback]", event, props);
  }
}