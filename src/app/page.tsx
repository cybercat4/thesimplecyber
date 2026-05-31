import { getJourneyEntries } from "@/lib/getJourneyEntries";
import SiteFooter from "@/components/layout/site-footer";
import FeaturedWriteupsSection from "@/components/home/featured-writeups-section";
import LatestJourneySection from "@/components/home/latest-journey-section";
import HomeHero from "@/components/home/home-hero";
import MainNav from "@/components/layout/main-nav";

export default async function Home() {
  const entries = await getJourneyEntries();

  return (
    <div>
      <MainNav />

      <main>
        <HomeHero />

        <div className="mx-auto max-w-4xl px-6 py-8">
          <h2 className="mb-4 text-2xl font-bold">
            Live Notion Entries
          </h2>

          <ul className="space-y-2">
            {entries.map((entry: any) => (
              <li key={entry.id}>
                {entry.properties?.Name?.title?.[0]?.plain_text ||
                  "Untitled"}
              </li>
            ))}
          </ul>
        </div>

        <LatestJourneySection />
        <FeaturedWriteupsSection />
      </main>

      <SiteFooter />
    </div>
  );
}