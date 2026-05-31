import { getJourneyEntries } from "@/lib/getJourneyEntries";
import Link from "next/link";

export default async function JourneyPage() {
  const entries = await getJourneyEntries();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-3 text-5xl font-bold">
          Journey
        </h1>

        <p className="mb-10 text-slate-400">
          Wins, failures, lessons learned, Black Hat MEA preparation,
          projects, and everything in between.
        </p>

        <div className="space-y-6">
          {entries.map((entry: any) => {
            const title =
              entry.properties?.Name?.title?.[0]?.plain_text ||
              "Untitled";

            const status =
              entry.properties?.Status?.select?.name ||
              "Learning";

            const date =
              entry.properties?.Date?.date?.start ||
              "No date";

            const tags =
              entry.properties?.Tags?.multi_select || [];

            return (
              <article
                key={entry.id}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-sky-500"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300">
                    {status}
                  </span>

                  <span className="text-sm text-slate-400">
                    {date}
                  </span>
                </div>

                <h2 className="mb-4 text-2xl font-semibold">
                  {title}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: any) => (
                    <span
                      key={tag.id}
                      className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-300"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}