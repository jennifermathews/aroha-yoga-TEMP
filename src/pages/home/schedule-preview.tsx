import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Clock } from "lucide-react"

const todaySchedule = [
  { time: "06:30 AM", class: "sunrise", instructor: "Kavya" },
  { time: "08:00 AM", class: "foundational", instructor: "Kavya" },
  { time: "11:00 AM", class: "therapeutic", instructor: "Ishaan" },
  { time: "06:00 PM", class: "vinyasa", instructor: "Rohan" },
  { time: "07:30 PM", class: "meditation", instructor: "Meher" },
]

export function SchedulePreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t("schedule.title")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {t("schedule.subtitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="space-y-3">
            {todaySchedule.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/30 hover:shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t(`classes.${item.class}`)}</p>
                      <p className="text-xs text-muted-foreground">{item.instructor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-xs">{item.time}</Badge>
                    <a
                      href={`https://wa.me/919876548123?text=${encodeURIComponent(
                        t("common.whatsappBooking")
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="ghost" className="text-xs text-primary">
                        {t("schedule.book")}
                      </Button>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="mt-10 text-center">
          <Link to="/schedule">
            <Button variant="outline" className="rounded-full">
              {t("schedule.viewFull")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
