export default function FeatureGrid() {
  const items = [
    {
      title: "Conversion-focused design",
      desc: "Hierarchy, messaging, and layout built to reduce friction and drive qualified signups.",
    },
    {
      title: "Performance-first implementation",
      desc: "Core Web Vitals-aware patterns so pages load fast and don’t leak conversion on slow devices.",
    },
    {
      title: "Experiment-ready by default",
      desc: "A/B hooks, event labeling, and rapid iteration loops so winning variants ship faster.",
    },
    {
      title: "Autonomous shipping",
      desc: "From Figma-level intent to production deployment with clean git workflows and CI/CD.",
    },
    {
      title: "Instrumentation that matters",
      desc: "Events tied to funnel steps so decisions are data-driven, not opinion-driven.",
    },
    {
      title: "Reusable landing systems",
      desc: "Componentized sections to launch campaigns quickly without redesigning from scratch.",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold">Built to ship, test, and iterate.</h2>
      <p className="mt-2 text-neutral-600">
        Everything on this page is structured for rapid experimentation and measurable conversion impact.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border p-6">
            <div className="text-sm font-semibold">{item.title}</div>
            <div className="mt-2 text-sm text-neutral-600">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}