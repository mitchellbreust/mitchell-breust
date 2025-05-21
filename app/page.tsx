import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-background">
          <HeroSection />
        </div>
        <div className="bg-muted/50">
          <ProjectsSection />
        </div>
        <div className="bg-background">
          <AboutSection />
        </div>
        <div className="bg-muted/50">
          <PricingSection />
        </div>
        <div className="bg-background">
          <ContactSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
