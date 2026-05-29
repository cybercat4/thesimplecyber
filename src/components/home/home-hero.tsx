export default function HomeHero() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-medium text-sky-400">
          Cybersecurity Learning Journey
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight">
          Documenting the journey from cybersecurity student to cybersecurity professional.
        </h1>

        <p className="mb-8 text-lg text-slate-400">
          Labs, projects, failures, lessons learned, Black Hat MEA preparation,
          and everything I discover along the way.
        </p>

        <div className="flex gap-4">
          <button className="rounded-lg bg-sky-500 px-5 py-3 font-medium text-white">
            View Journey
          </button>

          <button className="rounded-lg border border-slate-700 px-5 py-3">
            Read Writeups
          </button>
        </div>
      </div>
    </section>
  );
}