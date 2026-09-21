import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn } from "@/components/motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

const schedule: Record<string, Array<{ time: string; class: string; instructor: string }>> = {
  monday: [
    { time: "06:30 AM", class: "sunrise", instructor: "Kavya" },
    { time: "08:00 AM", class: "foundational", instructor: "Kavya" },
    { time: "11:00 AM", class: "therapeutic", instructor: "Ishaan" },
    { time: "06:00 PM", class: "vinyasa", instructor: "Rohan" },
    { time: "07:30 PM", class: "meditation", instructor: "Meher" },
  ],
  tuesday: [
    { time: "07:00 AM", class: "strength", instructor: "Rohan" },
    { time: "09:00 AM", class: "foundational", instructor: "Kavya" },
    { time: "05:30 PM", class: "yin", instructor: "Meher" },
    { time: "07:00 PM", class: "pranayama", instructor: "Kavya" },
  ],
  wednesday: [
    { time: "06:30 AM", class: "sunrise", instructor: "Kavya" },
    { time: "08:00 AM", class: "foundational", instructor: "Kavya" },
    { time: "11:00 AM", class: "therapeutic", instructor: "Ishaan" },
    { time: "06:00 PM", class: "vinyasa", instructor: "Rohan" },
    { time: "07:30 PM", class: "meditation", instructor: "Meher" },
  ],
  thursday: [
    { time: "07:00 AM", class: "strength", instructor: "Rohan" },
    { time: "09:00 AM", class: "foundational", instructor: "Kavya" },
    { time: "05:30 PM", class: "yin", instructor: "Meher" },
    { time: "07:00 PM", class: "pranayama", instructor: "Kavya" },
  ],
  friday: [
    { time: "06:30 AM", class: "sunrise", instructor: "Kavya" },
    { time: "08:00 AM", class: "foundational", instructor: "Kavya" },
    { time: "06:00 PM", class: "vinyasa", instructor: "Rohan" },
    { time: "07:30 PM", class: "restorative", instructor: "Meher" },
  ],
  saturday: [
    { time: "08:00 AM", class: "vinyasa", instructor: "Kavya" },
    { time: "10:00 AM", class: "strength", instructor: "Rohan" },
    { time: "05:00 PM", class: "yin", instructor: "Meher" },
  ],
  sunday: [
    { time: "09:00 AM", class: "restorative", instructor: "Meher" },
    { time: "11:00 AM", class: "meditation", instructor: "Kavya" },
  ],
}

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

export default function SchedulePage() {
  const { t } = useLanguage()

  return (
    <PageTransition>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{t("schedule.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("schedule.subtitle")}</p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-4">
          <Tabs defaultValue="monday">
            <TabsList className="mb-6 flex w-full overflow-x-auto">
              {days.map((day) => (
                <TabsTrigger key={day} value={day} className="text-xs sm:text-sm shrink-0">
                  {t(`schedule.${day}`).slice(0, 3)}
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day) => (
              <TabsContent key={day} value={day}>
                <div className="space-y-3">
                  {schedule[day].map((item, i) => (
                    <FadeIn key={i} delay={i * 0.05}>
                      <div className="flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/30">
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
                            href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </PageTransition>
  )
}
