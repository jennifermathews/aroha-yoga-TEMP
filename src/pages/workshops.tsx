import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CalendarDays } from "lucide-react"

export default function WorkshopsPage() {
  const { t, language } = useLanguage()

  const workshops = [
    { key: "backbends", price: "2,200", duration: "3 Hours", durationHi: "3 घंटे", freq: "monthly", image: "/workshop-backbend.webp" },
    { key: "breath", price: "1,800", duration: "2 Hours", durationHi: "2 घंटे", freq: "monthly", image: "/class-meditation.webp" },
    { key: "meditationFoundations", price: "4,500", duration: "4 Weeks", durationHi: "4 सप्ताह", freq: "quarterly", image: "/class-meditation.webp" },
    { key: "deskWorker", price: "2,000", duration: "2.5 Hours", durationHi: "2.5 घंटे", freq: "monthly", image: "/class-restorative.webp" },
  ]

  return (
    <PageTransition>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/workshop-backbend.webp" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{t("workshops.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("workshops.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {workshops.map((w, i) => (
              <FadeIn key={w.key} delay={i * 0.1}>
                <Card className="group overflow-hidden border-border/50 transition-all hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={w.image}
                      alt={t(`workshops.${w.key}`)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{t("workshops.upcoming")}</Badge>
                    <h3 className="font-heading text-xl font-bold">{t(`workshops.${w.key}`)}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {t(`workshops.${w.key}Desc`)}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {language === "hi" ? w.durationHi : w.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {t(`workshops.${w.freq}`)}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-heading text-2xl font-bold text-primary">₹{w.price}</span>
                      <a
                        href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="rounded-full">{t("common.bookNow")}</Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
