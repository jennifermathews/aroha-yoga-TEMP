import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Wifi, Droplets, Wind, ThermometerSun, Lock, Flower2, Dumbbell, Coffee } from "lucide-react"

const facilities = [
  { icon: ThermometerSun, labelEn: "1,800 sq ft Studio", labelHi: "1,800 वर्ग फुट स्टूडियो" },
  { icon: Wind, labelEn: "Air Purification", labelHi: "वायु शोधन प्रणाली" },
  { icon: ThermometerSun, labelEn: "Heated Flooring", labelHi: "गर्म फ़र्श" },
  { icon: Lock, labelEn: "Lockers & Changing", labelHi: "लॉकर और चेंजिंग रूम" },
  { icon: Droplets, labelEn: "Shower Facilities", labelHi: "शावर सुविधा" },
  { icon: Coffee, labelEn: "Herbal Tea Corner", labelHi: "हर्बल चाय कॉर्नर" },
  { icon: Dumbbell, labelEn: "All Props Provided", labelHi: "सभी प्रॉप्स उपलब्ध" },
  { icon: Flower2, labelEn: "Meditation Cushions", labelHi: "ध्यान कुशन" },
  { icon: Droplets, labelEn: "Filtered Water", labelHi: "शुद्ध पानी" },
  { icon: Wifi, labelEn: "Free Wi-Fi", labelHi: "मुफ्त वाई-फाई" },
]

export function FacilitiesPreview() {
  const { language } = useLanguage()
  const { t } = useLanguage()

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t("about.facilities")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {t("about.facilitiesTitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {facilities.map((item, i) => (
            <FadeIn key={item.labelEn} delay={i * 0.05}>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card/50 p-4 text-center transition-all hover:border-primary/30 hover:shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium">
                  {language === "hi" ? item.labelHi : item.labelEn}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
