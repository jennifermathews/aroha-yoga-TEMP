import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn } from "@/components/motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function FAQPage() {
  const { t } = useLanguage()

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
  ]

  return (
    <PageTransition>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{t("faq.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("faq.subtitle")}</p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4">
          <FadeIn>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border/50 bg-card/50 px-5"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn className="mt-12">
            <div className="rounded-2xl bg-muted/50 border border-border/50 p-8 text-center">
              <h3 className="font-heading text-xl font-bold">{t("faq.stillHaveQuestions")}</h3>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("contact.whatsapp")}
                  </Button>
                </a>
                <a href="mailto:hello@arohayogaatelier.com">
                  <Button variant="outline" className="rounded-full">
                    {t("contact.emailUs")}
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
