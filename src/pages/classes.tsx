import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Wind, Dumbbell, Heart, Leaf, Brain, Sunrise, Moon } from "lucide-react"

const classes = [
  { key: "foundational", icon: Sun, level: "Beginner", levelHi: "शुरुआती", image: "/class-foundational.webp" },
  { key: "vinyasa", icon: Wind, level: "Intermediate", levelHi: "मध्यम", image: "/class-vinyasa.webp" },
  { key: "strength", icon: Dumbbell, level: "All Levels", levelHi: "सभी स्तर", image: "/class-strength.webp" },
  { key: "restorative", icon: Heart, level: "All Levels", levelHi: "सभी स्तर", image: "/class-restorative.webp" },
  { key: "yin", icon: Leaf, level: "All Levels", levelHi: "सभी स्तर", image: "/class-yin.webp" },
  { key: "therapeutic", icon: Brain, level: "All Levels", levelHi: "सभी स्तर", image: "/class-therapeutic.webp" },
  { key: "pranayama", icon: Wind, level: "All Levels", levelHi: "सभी स्तर", image: "/class-pranayama.webp" },
  { key: "meditation", icon: Brain, level: "All Levels", levelHi: "सभी स्तर", image: "/class-meditation.webp" },
  { key: "sunrise", icon: Sunrise, level: "All Levels", levelHi: "सभी स्तर", image: "/class-sunrise.webp" },
  { key: "moonlight", icon: Moon, level: "All Levels", levelHi: "सभी स्तर", image: "/class-moonlight.webp" },
]

export default function ClassesPage() {
  const { t, language } = useLanguage()

  return (
    <PageTransition>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/class-vinyasa.webp" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{t("classes.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("classes.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {classes.map((cls, i) => (
              <FadeIn key={cls.key} delay={i * 0.06}>
                <Card className="group overflow-hidden border-border/50 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row">
                    <div className="aspect-video sm:aspect-square sm:w-40 overflow-hidden shrink-0">
                      <img
                        src={cls.image}
                        alt={t(`classes.${cls.key}`)}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="flex flex-col justify-center p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <cls.icon className="h-4 w-4 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          {language === "hi" ? cls.levelHi : cls.level}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg">{t(`classes.${cls.key}`)}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {t(`classes.${cls.key}Desc`)}
                      </p>
                      <a
                        href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3"
                      >
                        <Button size="sm" variant="outline" className="rounded-full text-xs">
                          {t("common.bookNow")}
                        </Button>
                      </a>
                    </CardContent>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold md:text-3xl">{t("classes.notSure")}</h2>
            <p className="mt-3 text-muted-foreground">{t("classes.getConsultation")}</p>
            <a
              href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block"
            >
              <Button size="lg" className="rounded-full">{t("contact.whatsapp")}</Button>
            </a>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
