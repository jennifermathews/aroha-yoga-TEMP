import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Clock, CalendarDays } from "lucide-react"

export function WorkshopsPreview() {
  const { t } = useLanguage()

  const workshops = [
    { key: "backbends", price: "2,200", duration: "3 Hours", durationHi: "3 घंटे", freq: "monthly", image: "/workshop-backbend.webp" },
    { key: "breath", price: "1,800", duration: "2 Hours", durationHi: "2 घंटे", freq: "monthly", image: "/class-meditation.webp" },
    { key: "deskWorker", price: "2,000", duration: "2.5 Hours", durationHi: "2.5 घंटे", freq: "monthly", image: "/class-restorative.webp" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t("workshops.title")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {t("workshops.subtitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {workshops.map((w, i) => (
            <FadeIn key={w.key} delay={i * 0.1}>
              <Card className="group overflow-hidden border-border/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={w.image}
                    alt={t(`workshops.${w.key}`)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <Badge variant="secondary" className="mb-2">
                    {t("workshops.upcoming")}
                  </Badge>
                  <h3 className="font-semibold">{t(`workshops.${w.key}`)}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`workshops.${w.key}Desc`)}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {w.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {t(`workshops.${w.freq}`)}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold text-primary">₹{w.price}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link to="/workshops">
            <Button variant="outline" className="rounded-full">
              {t("workshops.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
