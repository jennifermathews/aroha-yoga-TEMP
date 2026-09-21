import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn, SlideIn } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Leaf, Star, BookOpen, Shield, Sparkles } from "lucide-react"

const valueIcons = [Heart, Users, Leaf, Star, BookOpen, Shield, Sparkles]

export default function AboutPage() {
  const { t, language } = useLanguage()

  const facilities = [
    { en: "1,800 sq ft Practice Space", hi: "1,800 वर्ग फुट अभ्यास स्थान" },
    { en: "Natural Daylight Studio", hi: "प्राकृतिक दिन की रोशनी वाला स्टूडियो" },
    { en: "Air Purification System", hi: "वायु शोधन प्रणाली" },
    { en: "Heated Flooring (Winter)", hi: "गर्म फ़र्श (सर्दियों में)" },
    { en: "Changing Rooms & Lockers", hi: "चेंजिंग रूम और लॉकर" },
    { en: "Shower Facilities", hi: "शावर सुविधा" },
    { en: "Herbal Tea Corner", hi: "हर्बल चाय कॉर्नर" },
    { en: "All Yoga Props Provided", hi: "सभी योग प्रॉप्स उपलब्ध" },
    { en: "Meditation Cushions", hi: "ध्यान कुशन" },
    { en: "Filtered Drinking Water", hi: "शुद्ध पेय जल" },
    { en: "Free Wi-Fi", hi: "मुफ्त वाई-फाई" },
    { en: "Private Consultation Room", hi: "निजी परामर्श कक्ष" },
  ]

  const testimonials = [
    { name: "Ananya B.", text: "After six months at Aroha, my chronic neck tension reduced dramatically. The instructors genuinely pay attention to individual needs.", textHi: "आरोहा में छह महीने बाद, मेरी गर्दन का पुराना तनाव काफ़ी कम हो गया।" },
    { name: "Raghav S.", text: "The studio atmosphere is calm without feeling intimidating. Every class feels intentional and well structured.", textHi: "स्टूडियो का माहौल शांत है बिना किसी दबाव के। हर कक्षा सुव्यवस्थित लगती है।" },
    { name: "Priya K.", text: "I joined as a complete beginner and felt welcomed from day one.", textHi: "मैंने बिल्कुल नए के रूप में शुरू किया और पहले दिन से स्वागत महसूस किया।" },
    { name: "Neha M.", text: "The restorative sessions became an important part of my weekly routine.", textHi: "रिस्टोरेटिव सत्र मेरी दिनचर्या का महत्वपूर्ण हिस्सा बन गए।" },
  ]

  return (
    <PageTransition>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="/studio-space.webp" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{t("about.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("about.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SlideIn direction="left">
            <p className="text-lg leading-relaxed text-muted-foreground">{t("about.description")}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t("about.approach")}</p>
          </SlideIn>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">{t("about.values")}</p>
              <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">{t("about.valuesTitle")}</h2>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7].map((n, i) => {
              const Icon = valueIcons[i]
              return (
                <FadeIn key={n} delay={i * 0.08}>
                  <Card className="border-border/50 bg-card/50 h-full">
                    <CardContent className="p-5">
                      <Icon className="h-8 w-8 text-primary" />
                      <h3 className="mt-3 font-semibold text-sm">{t(`about.v${n}`)}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{t(`about.v${n}d`)}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">{t("about.facilities")}</p>
              <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">{t("about.facilitiesTitle")}</h2>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <FadeIn key={f.en} delay={i * 0.05}>
                <div className="rounded-lg border border-border/50 bg-card/50 p-4 text-sm font-medium">
                  {language === "hi" ? f.hi : f.en}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">{t("testimonials.title")}</h2>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.1}>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <p className="italic text-muted-foreground">
                      "{language === "hi" ? item.textHi : item.text}"
                    </p>
                    <p className="mt-3 font-semibold text-sm">{item.name}</p>
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
