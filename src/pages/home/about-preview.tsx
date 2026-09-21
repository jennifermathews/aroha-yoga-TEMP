import { useLanguage } from "@/i18n"
import { SlideIn } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <SlideIn direction="left">
            <div className="relative">
              <img
                src="/studio-space.webp"
                alt="Aroha Studio"
                className="rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary/10 p-4 backdrop-blur-sm border border-primary/20">
                <p className="font-heading text-2xl font-bold text-primary">{t("about.foundedYear")}</p>
                <p className="text-xs text-muted-foreground">{t("about.founded")}</p>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                {t("about.title")}
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                {t("about.subtitle")}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t("about.description")}
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {t("about.approach")}
              </p>
              <Link to="/about" className="mt-6 inline-block">
                <Button variant="outline" className="rounded-full">
                  {t("about.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
