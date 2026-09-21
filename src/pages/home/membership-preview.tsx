import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"

export function MembershipPreview() {
  const { t } = useLanguage()

  const plans = [
    {
      name: t("membership.intro"),
      desc: t("membership.introDesc"),
      price: "1,499",
      features: ["Unlimited group classes", "One wellness consultation"],
      featuresHi: ["असीमित ग्रुप क्लासेस", "एक वेलनेस परामर्श"],
    },
    {
      name: t("membership.unlimited"),
      desc: t("membership.unlimitedDesc"),
      price: "7,500",
      popular: true,
      features: ["Unlimited classes", "Priority workshop booking", "Member discounts"],
      featuresHi: ["असीमित कक्षाएं", "कार्यशाला में प्राथमिकता", "सदस्य छूट"],
    },
    {
      name: t("membership.annual"),
      desc: t("membership.annualDesc"),
      price: "72,000",
      features: ["Unlimited classes", "Four private sessions", "Workshop discounts"],
      featuresHi: ["असीमित कक्षाएं", "चार निजी सत्र", "कार्यशाला छूट"],
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t("membership.title")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {t("membership.subtitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <Card className={`relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg ${plan.popular ? "border-primary shadow-md" : "border-border/50"}`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {t("membership.popular")}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="font-heading text-3xl font-bold">₹{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {(plan.features).map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block"
                  >
                    <Button className={`w-full rounded-full ${plan.popular ? "" : "variant-outline"}`} variant={plan.popular ? "default" : "outline"}>
                      {t("membership.join")}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link to="/membership">
            <Button variant="outline" className="rounded-full">
              {t("membership.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
