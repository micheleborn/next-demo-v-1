import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json().catch(() => null);

  // Portfolio-friendly: proves server wiring.
  console.log("TRACK_EVENT", payload);

  return NextResponse.json({ ok: true });
}