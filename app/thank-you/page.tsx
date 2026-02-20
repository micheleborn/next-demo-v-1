export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <div className="mt-16 space-y-3 rounded-2xl border p-6">
        <h1 className="text-2xl font-bold">Thanks — request received.</h1>
        <p className="text-neutral-600">
          This is the conversion step (thank-you page). In a real flow, you’d confirm next steps or schedule.
        </p>

        <a className="inline-block rounded-xl border px-4 py-2" href="/">
          Back to landing page
        </a>
      </div>
    </main>
  );
}