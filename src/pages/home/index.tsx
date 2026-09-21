import { PageTransition } from "@/components/motion"
import { HeroSection } from "./hero-section"
import { AboutPreview } from "./about-preview"
import { ClassesPreview } from "./classes-preview"
import { SchedulePreview } from "./schedule-preview"
import { InstructorsPreview } from "./instructors-preview"
import { MembershipPreview } from "./membership-preview"
import { TestimonialsSection } from "./testimonials-section"
import { WorkshopsPreview } from "./workshops-preview"
import { FacilitiesPreview } from "./facilities-preview"
import { TrialSection } from "./trial-section"
import { StatsSection } from "./stats-section"
import { FAQPreview } from "./faq-preview"
import { ContactPreview } from "./contact-preview"

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ClassesPreview />
      <SchedulePreview />
      <InstructorsPreview />
      <MembershipPreview />
      <TestimonialsSection />
      <WorkshopsPreview />
      <FacilitiesPreview />
      <TrialSection />
      <FAQPreview />
      <ContactPreview />
    </PageTransition>
  )
}
