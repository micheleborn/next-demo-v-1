"use client";

import { useState } from "react";
import { track } from "@/lib/track";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await track("lead_submit", { email, company });
    window.location.href = "/thank-you";
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border p-5">
      <div className="text-lg font-semibold">Get a demo</div>

      <input
        className="w-full rounded-xl border px-3 py-2"
        placeholder="Work email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className="w-full rounded-xl border px-3 py-2"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-black px-4 py-2 text-white"
        onClick={() => track("cta_click", { cta: "lead_form_submit" })}
      >
        Request demo
      </button>

      <p className="text-xs text-neutral-500">
        No spam. Just one email confirming your request.
      </p>
    </form>
  );
}