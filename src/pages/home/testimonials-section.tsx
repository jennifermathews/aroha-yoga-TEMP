import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Quote } from "lucide-react"

const testimonials = [
  { name: "Ananya B.", text: "After six months at Aroha, my chronic neck tension reduced dramatically. The instructors genuinely pay attention to individual needs.", textHi: "आरोहा में छह महीने बाद, मेरी गर्दन का पुराना तनाव काफ़ी कम हो गया। प्रशिक्षक सच में हर व्यक्ति पर ध्यान देते हैं।" },
  { name: "Raghav S.", text: "The studio atmosphere is calm without feeling intimidating. Every class feels intentional and well structured.", textHi: "स्टूडियो का माहौल शांत है बिना किसी दबाव के। हर कक्षा सोची-समझी और सुव्यवस्थित लगती है।" },
  { name: "Priya K.", text: "I joined as a complete beginner and felt welcomed from day one. The foundational classes built my confidence quickly.", textHi: "मैंने बिल्कुल नए के रूप में शुरू किया और पहले दिन से स्वागत महसूस किया। फाउंडेशनल कक्षाओं ने जल्दी ही मेरा आत्मविश्वास बढ़ाया।" },
  { name: "Neha M.", text: "The restorative sessions became an important part of my weekly routine. I leave feeling refreshed every time.", textHi: "रिस्टोरेटिव सत्र मेरी साप्ताहिक दिनचर्या का महत्वपूर्ण हिस्सा बन गए। हर बार तरोताज़ा होकर लौटती हूँ।" },
]

export function TestimonialsSection() {
  const { t, language } = useLanguage()

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t("testimonials.title")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {t("testimonials.subtitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.1}>
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="mt-3 leading-relaxed text-muted-foreground italic">
                    "{language === "hi" ? item.textHi : item.text}"
                  </p>
                  <p className="mt-4 font-semibold text-sm">{item.name}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link to="/about">
            <Button variant="outline" className="rounded-full">
              {t("testimonials.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
