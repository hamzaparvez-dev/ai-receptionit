import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { WorkflowSection } from "@/components/workflow-section"
import { DemoSection } from "@/components/demo-section"
import { ROISection } from "@/components/roi-section"
import { PricingSection } from "@/components/pricing-section"
import { WhoItsForSection } from "@/components/who-its-for-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { SetupTimelineSection } from "@/components/setup-timeline-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function AIReceptionistProposal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <main>
          <HeroSection />
          <ProblemsSection />
          <WorkflowSection />
          <DemoSection />
          <ROISection />
          <PricingSection />
          <WhoItsForSection />
          <IntegrationsSection />
          <SetupTimelineSection />
          <CTASection />
        </main>
      </div>
    </div>
  )
}
