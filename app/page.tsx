import { cookies } from "next/headers";
import LeadForm from "@/components/LeadForm";
import SocialProof from "@/components/SocialProof";
import FeatureGrid from "@/components/FeatureGrid";

export default async function Page() {
  const cookieStore = await cookies();
  const variant = cookieStore.get("exp_headline")?.value ?? "A";

  const headline =
    variant === "B"
      ? "Launch campaigns in days, not weeks."
      : "Landing pages built for speed, clarity, and conversion.";

  return (
    <main className="mx-auto max-w-5xl p-6">
      <header className="flex items-center justify-between py-6">
        <div className="text-lg font-semibold">Conversion-focused landing page demo</div>
      {/* 
<div className="text-sm text-neutral-500">
  Variant: {variant}
</div>
*/}
      </header>

      <section className="grid gap-8 md:grid-cols-2 md:items-center">
     <div className="space-y-5">
  <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600">
    AI-powered advertising
  </div>

  <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight">
    Advertise your business.
  </h1>

  <p className="max-w-prose text-base leading-7 text-neutral-600">
    Launch conversion-focused landing pages, run experiments, and iterate quickly—without
    handoffs or bottlenecks.
  </p>

  <div className="flex flex-wrap items-center gap-3 pt-2">
    <a
      href="#get-started"
      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-blue-700"
    >
      Get started
    </a>

    <a
      href="#faq"
      className="rounded-md border px-4 py-2 text-sm font-semibold uppercase tracking-wide text-neutral-700 hover:bg-neutral-50"
    >
      Learn more
    </a>
  </div>

  <div className="text-xs text-neutral-500">
    No spam. One response with next steps.
  </div>
</div>



<div id="get-started">
  <LeadForm />
</div>

      </section>

      <SocialProof />
      <FeatureGrid />

      {process.env.NODE_ENV === "development" && (
  <div className="fixed bottom-3 right-3 rounded bg-black px-3 py-1 text-xs text-white shadow-lg">
    exp_headline: {variant}
  </div>
)}
    </main>
  );
}