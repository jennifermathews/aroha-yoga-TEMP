import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn } from "@/components/motion"
import { Link } from "react-router-dom"
import { Users, BookOpen, Phone, HelpCircle, Info } from "lucide-react"

export default function MorePage() {
  const { t } = useLanguage()

  const links = [
    { path: "/about", icon: Info, label: t("nav.about") },
    { path: "/instructors", icon: Users, label: t("nav.instructors") },
    { path: "/workshops", icon: BookOpen, label: t("nav.workshops") },
    { path: "/contact", icon: Phone, label: t("nav.contact") },
    { path: "/faq", icon: HelpCircle, label: t("nav.faq") },
  ]

  return (
    <PageTransition>
      <section className="py-20">
        <div className="mx-auto max-w-lg px-4">
          <h1 className="font-heading text-3xl font-bold text-center mb-8">{t("nav.more")}</h1>
          <div className="space-y-3">
            {links.map((link, i) => (
              <FadeIn key={link.path} delay={i * 0.05}>
                <Link
                  to={link.path}
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{link.label}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
