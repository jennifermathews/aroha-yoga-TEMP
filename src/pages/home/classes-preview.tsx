import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const classes = [
  { key: "foundational", image: "/class-foundational.webp" },
  { key: "vinyasa", image: "/class-vinyasa.webp" },
  { key: "strength", image: "/class-strength.webp" },
  { key: "restorative", image: "/class-restorative.webp" },
  { key: "yin", image: "/class-yin.webp" },
  { key: "pranayama", image: "/class-pranayama.webp" },
  { key: "meditation", image: "/class-meditation.webp" },
  { key: "sunrise", image: "/class-sunrise.webp" },
]

export function ClassesPreview() {
  const { t } = useLanguage()

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t("classes.title")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {t("classes.subtitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((item, i) => (
            <FadeIn key={item.key} delay={i * 0.06}>
              <Link to="/classes" className="group block">
                <div className="overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(`classes.${item.key}`)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">
                      {t(`classes.${item.key}`)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {t(`classes.${item.key}Desc`)}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link to="/classes">
            <Button variant="outline" className="rounded-full">
              {t("classes.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
