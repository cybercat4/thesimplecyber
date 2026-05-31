export default function FeaturedWriteupsSection() {
  return (
    <section id="writeups">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold">
          From Struggles to Structured Lessons
        </h2>

        <p className="mb-10 text-slate-400">
          Writeups created from real labs, failures, and lessons learned.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 p-6">
            <p className="mb-2 text-sm text-sky-400">
              Web Security
            </p>

            <h3 className="mb-3 text-xl font-semibold">
              Understanding SSRF
            </h3>

            <p className="text-slate-400">
              Lessons learned after multiple failed attempts.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 p-6">
            <p className="mb-2 text-sm text-sky-400">
              Blue Team
            </p>

            <h3 className="mb-3 text-xl font-semibold">
              Building My First Detection Lab
            </h3>

            <p className="text-slate-400">
              Mistakes, redesigns and improvements.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 p-6">
            <p className="mb-2 text-sm text-sky-400">
              Learning Process
            </p>

            <h3 className="mb-3 text-xl font-semibold">
              How I Track Progress
            </h3>

            <p className="text-slate-400">
              Documenting growth through public learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}