import { CatalogProvider } from "@/src/components/sections/CatalogFilters";
import CreatorCTASection from "@/src/components/sections/CreatorCTASection";
import CreatorToolsSection from "@/src/components/sections/CreatorToolsSection";
import CourseCatalogSection from "@/src/components/sections/CourseCatalogSection";
import HeroSection from "@/src/components/sections/HeroSection";
import LearningPathsSection from "@/src/components/sections/LearningPathsSection";
import PartnerLogoStrip from "@/src/components/sections/PartnerLogoStrip";
import ProfessionalGrowthSection from "@/src/components/sections/ProfessionalGrowthSection";
import SiteFooter from "@/src/components/layout/SiteFooter";
import TestimonialsSection from "@/src/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main id="home">
      <CatalogProvider>
        <HeroSection />
        <PartnerLogoStrip />
        <CourseCatalogSection />
      </CatalogProvider>
      <LearningPathsSection />
      <ProfessionalGrowthSection />
      <CreatorToolsSection />
      <CreatorCTASection />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
