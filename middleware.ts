import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "exp_headline";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const existing = req.cookies.get(COOKIE)?.value;
  if (existing === "A" || existing === "B") return res;

  const variant = Math.random() < 0.5 ? "A" : "B";
  res.cookies.set(COOKIE, variant, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
}