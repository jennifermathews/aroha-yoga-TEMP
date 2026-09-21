import { useLanguage } from "@/i18n"
import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Camera } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-muted/30 pb-24 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.webp" alt="Aroha" className="h-8 w-8" />
              <span className="font-heading text-lg font-semibold">Aroha Yoga Atelier</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/arohayogaatelier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="tel:+919876548123"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@arohayogaatelier.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.about")}</Link>
              <Link to="/classes" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.classes")}</Link>
              <Link to="/schedule" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.schedule")}</Link>
              <Link to="/membership" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.membership")}</Link>
              <Link to="/workshops" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.workshops")}</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.studioHours")}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>{t("contact.monFri")}</span>
                <span>6:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{t("contact.sat")}</span>
                <span>7:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{t("contact.sun")}</span>
                <span>8:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("contact.title")}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>{t("contact.address")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919876548123" className="hover:text-primary transition-colors">+91 98765 48123</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:hello@arohayogaatelier.com" className="hover:text-primary transition-colors">hello@arohayogaatelier.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; 2018–{new Date().getFullYear()} Aroha Yoga Atelier. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
