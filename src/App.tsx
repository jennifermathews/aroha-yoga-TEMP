import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Header } from "@/components/layout/header"
import { BottomNav } from "@/components/layout/bottom-nav"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { Toaster } from "@/components/ui/sonner"
import { lazy, Suspense, useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"

const HomePage = lazy(() => import("@/pages/home"))
const AboutPage = lazy(() => import("@/pages/about"))
const ClassesPage = lazy(() => import("@/pages/classes"))
const SchedulePage = lazy(() => import("@/pages/schedule"))
const InstructorsPage = lazy(() => import("@/pages/instructors"))
const MembershipPage = lazy(() => import("@/pages/membership"))
const WorkshopsPage = lazy(() => import("@/pages/workshops"))
const ContactPage = lazy(() => import("@/pages/contact"))
const FAQPage = lazy(() => import("@/pages/faq"))
const MorePage = lazy(() => import("@/pages/more"))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Spinner className="h-8 w-8 text-primary" />
    </div>
  )
}

export function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-svh">
      <Header />
      <main className="pt-16">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/instructors" element={<InstructorsPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/workshops" element={<WorkshopsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/more" element={<MorePage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
      <Toaster />
    </div>
  )
}

export default App
