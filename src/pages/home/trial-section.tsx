import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function TrialSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 p-8 md:p-12 text-center">
            <motion.div
              className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("membership.trial")}</span>
              </div>

              <h2 className="font-heading text-3xl font-bold md:text-5xl">
                ₹499
              </h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                {t("membership.trialDesc")}
              </p>

              <a
                href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappTrial"))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block"
              >
                <Button size="lg" className="rounded-full text-base">
                  {t("membership.trialCta")}
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
