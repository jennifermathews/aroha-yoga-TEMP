import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t("contact.title")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {t("contact.subtitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FadeIn delay={0}>
            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-6 text-center transition-all hover:border-primary/30 hover:shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-3 font-semibold text-sm">{t("contact.landmark")}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{t("contact.address")}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <a href="tel:+919876548123" className="block">
              <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-6 text-center transition-all hover:border-primary/30 hover:shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold text-sm">{t("contact.callUs")}</h3>
                <p className="mt-1 text-xs text-muted-foreground">+91 98765 48123</p>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="mailto:hello@arohayogaatelier.com" className="block">
              <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-6 text-center transition-all hover:border-primary/30 hover:shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-semibold text-sm">{t("contact.emailUs")}</h3>
                <p className="mt-1 text-xs text-muted-foreground">hello@arohayogaatelier.com</p>
              </div>
            </a>
          </FadeIn>
        </div>

        <FadeIn className="mt-8 text-center">
          <Link to="/contact">
            <Button variant="outline" className="rounded-full">
              {t("common.viewMore")}
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
