export default function LatestJourneySection() {
  return (
    <section className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Latest Journey Entries
          </h2>
          <p className="max-w-2xl text-sm text-slate-400">
            Short, honest logs of what I&apos;m actually working on — including the parts that
            didn&apos;t go as planned.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <article className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-sm">
            <span className="mb-2 inline-flex w-fit items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-amber-300">
              Struggle
            </span>
            <h3 className="mb-1 text-sm font-semibold text-slate-50">
              Stuck on SSRF request flow
            </h3>
            <p className="mb-2 text-[11px] font-medium text-slate-400">
              May 28, 2026
            </p>
            <p className="mb-3 text-xs leading-relaxed text-slate-400">
              Spent a few hours on an SSRF lab and realized I was guessing payloads without
              understanding how the server makes outbound requests. Next step: diagram the request
              path before trying more inputs.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex text-xs font-medium text-sky-400 hover:text-sky-300"
            >
              Read more
            </a>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-sm">
            <span className="mb-2 inline-flex w-fit items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-emerald-300">
              Win After Failure
            </span>
            <h3 className="mb-1 text-sm font-semibold text-slate-50">
              Fixing failed login visibility in the lab
            </h3>
            <p className="mb-2 text-[11px] font-medium text-slate-400">
              May 26, 2026
            </p>
            <p className="mb-3 text-xs leading-relaxed text-slate-400">
              My Windows event forwarding filters were too strict, so half the failed logins never
              reached the collector. After two evenings of troubleshooting, I fixed the filters and
              wrote a small checklist to avoid the same mistake.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex text-xs font-medium text-sky-400 hover:text-sky-300"
            >
              Read more
            </a>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-sm">
            <span className="mb-2 inline-flex w-fit items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-sky-300">
              Ongoing
            </span>
            <h3 className="mb-1 text-sm font-semibold text-slate-50">
              Balancing Black Hat MEA prep with fundamentals
            </h3>
            <p className="mb-2 text-[11px] font-medium text-slate-400">
              May 24, 2026
            </p>
            <p className="mb-3 text-xs leading-relaxed text-slate-400">
              I passed a practice exam, but couldn&apos;t explain several answers clearly. I&apos;m
              shifting from question grinding to explaining core concepts out loud and using tests
              only to reveal gaps.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex text-xs font-medium text-sky-400 hover:text-sky-300"
            >
              Read more
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
