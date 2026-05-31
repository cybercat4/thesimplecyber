import { getJourneyEntries } from "@/lib/getJourneyEntries";
import SiteFooter from "@/components/layout/site-footer";
import FeaturedWriteupsSection from "@/components/home/featured-writeups-section";
import LatestJourneySection from "@/components/home/latest-journey-section";
import HomeHero from "@/components/home/home-hero";
import MainNav from "@/components/layout/main-nav";

export default async function Home() {
  const entries = await getJourneyEntries();

  console.log("NOTION ENTRIES:", entries);
  return (
    <div>
      <MainNav />

      <main>
        <HomeHero />
        <LatestJourneySection />
        <FeaturedWriteupsSection />
        
      </main>
      <SiteFooter />
    </div>
  );
}