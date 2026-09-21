import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn } from "@/components/motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

export default function MembershipPage() {
  const { t, language } = useLanguage()

  const plans = [
    {
      name: t("membership.intro"), desc: t("membership.introDesc"), price: "1,499",
      features: ["Unlimited group classes", "One wellness consultation"],
      featuresHi: ["असीमित ग्रुप कक्षाएं", "एक वेलनेस परामर्श"],
    },
    {
      name: t("membership.essential"), desc: t("membership.essentialDesc"), price: "4,800",
      features: ["12 classes per month", "Free community events"],
      featuresHi: ["प्रतिमाह 12 कक्षाएं", "मुफ्त सामुदायिक कार्यक्रम"],
    },
    {
      name: t("membership.unlimited"), desc: t("membership.unlimitedDesc"), price: "7,500", popular: true,
      features: ["Unlimited classes", "Priority workshop booking", "Member discounts"],
      featuresHi: ["असीमित कक्षाएं", "कार्यशाला में प्राथमिकता", "सदस्य छूट"],
    },
    {
      name: t("membership.quarterly"), desc: t("membership.quarterlyDesc"), price: "20,000",
      features: ["Unlimited classes", "Two private consultations"],
      featuresHi: ["असीमित कक्षाएं", "दो निजी परामर्श"],
    },
    {
      name: t("membership.annual"), desc: t("membership.annualDesc"), price: "72,000",
      features: ["Unlimited classes", "Four private sessions", "Workshop discounts"],
      featuresHi: ["असीमित कक्षाएं", "चार निजी सत्र", "कार्यशाला छूट"],
    },
  ]

  const privateSessions = [
    { name: t("membership.oneOnOne"), price: "2,500", duration: "60 min", durationHi: "60 मिनट" },
    { name: t("membership.therapeutic"), price: "3,200", duration: "75 min", durationHi: "75 मिनट" },
    { name: t("membership.corporate"), price: "12,000+", duration: "Up to 20 pax", durationHi: "20 लोगों तक" },
  ]

  return (
    <PageTransition>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{t("membership.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("membership.subtitle")}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 p-6 md:p-10 text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-3">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("membership.trial")}</span>
              </div>
              <h2 className="font-heading text-4xl font-bold">₹499</h2>
              <p className="mt-2 text-muted-foreground">{t("membership.trialDesc")}</p>
              <a
                href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappTrial"))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block"
              >
                <Button size="lg" className="rounded-full">{t("membership.trialCta")}</Button>
              </a>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.08}>
                <Card className={`relative h-full transition-all hover:-translate-y-1 hover:shadow-lg ${plan.popular ? "border-primary shadow-md" : "border-border/50"}`}>
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">{t("membership.popular")}</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <p className="text-xs text-muted-foreground">{plan.desc}</p>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="font-heading text-3xl font-bold">₹{plan.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {(language === "hi" ? plan.featuresHi : plan.features).map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full rounded-full" variant={plan.popular ? "default" : "outline"}>
                        {t("membership.join")}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn>
            <h2 className="text-center font-heading text-3xl font-bold mb-10">{t("membership.privateSessions")}</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {privateSessions.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.1}>
                <Card className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{s.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === "hi" ? s.durationHi : s.duration}
                    </p>
                    <p className="mt-3 font-heading text-2xl font-bold text-primary">₹{s.price}</p>
                    <a
                      href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block"
                    >
                      <Button size="sm" variant="outline" className="rounded-full">{t("common.bookNow")}</Button>
                    </a>
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
