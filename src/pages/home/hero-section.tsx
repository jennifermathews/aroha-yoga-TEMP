import { useLanguage } from "@/i18n"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-studio.webp"
          alt="Aroha Yoga Studio"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 md:pb-32 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">
              {t("hero.trialPrice")} ₹499
            </span>
          </motion.div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {t("hero.tagline")}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappTrial"))}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full rounded-full text-base sm:w-auto">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link to="/classes">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full text-base sm:w-auto"
              >
                {t("hero.explore")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute right-8 top-32 hidden lg:block"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-24 w-24 rounded-full bg-primary/10 blur-xl" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-48 bottom-32 hidden lg:block"
          animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-16 w-16 rounded-full bg-accent/20 blur-lg" />
        </motion.div>
      </div>
    </section>
  )
}
