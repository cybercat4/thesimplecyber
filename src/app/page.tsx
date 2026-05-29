import SiteFooter from "@/components/layout/site-footer";
import FeaturedWriteupsSection from "@/components/home/featured-writeups-section";
import LatestJourneySection from "@/components/home/latest-journey-section";
import HomeHero from "@/components/home/home-hero";
import MainNav from "@/components/layout/main-nav";

export default function Home() {
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