export default function SocialProof() {
  return (
    <section className="mt-20 space-y-10">
      <div className="text-center space-y-2">
        <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
          Trusted by growth-driven teams
        </div>
        <p className="text-neutral-600 text-sm">
          Supporting advertiser acquisition and performance optimization across global campaigns.
        </p>
      </div>


      <div className="flex flex-wrap items-center justify-center gap-3">
  {["Performance Marketing", "CTV", "Mobile UA", "AdTech", "B2B SaaS"].map((label) => (
    <div
      key={label}
      className="rounded-full border px-4 py-2 text-xs font-semibold text-neutral-600"
    >
      {label}
    </div>
  ))}
</div>

      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        <div className="space-y-1">
          <div className="text-2xl font-semibold">+18%</div>
          <div className="text-xs text-neutral-500">
            Avg. landing page conversion improvement
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl font-semibold">&lt; 2s</div>
          <div className="text-xs text-neutral-500">
            Median page load time
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl font-semibold">250+</div>
          <div className="text-xs text-neutral-500">
            Campaign launches supported
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl font-semibold">99.9%</div>
          <div className="text-xs text-neutral-500">
            Uptime across marketing surfaces
          </div>
        </div>
      </div>
    </section>
  );
}