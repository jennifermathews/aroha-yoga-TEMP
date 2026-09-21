import { useLanguage } from "@/i18n"
import { FadeIn } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const instructors = [
  { name: "Kavya Raithatha", role: "Lead Yoga Educator", exp: 11, image: "/instructor-kavya.webp", speciality: "Vinyasa, Breathwork" },
  { name: "Ishaan Vedant", role: "Therapeutic Specialist", exp: 9, image: "/instructor-ishaan.webp", speciality: "Injury Recovery, Mobility" },
  { name: "Meher Ahuja", role: "Yin & Restorative", exp: 8, image: "/instructor-meher.webp", speciality: "Yin Yoga, Mindfulness" },
  { name: "Rohan Sarin", role: "Strength Coach", exp: 7, image: "/instructor-rohan.webp", speciality: "Strength, Athletic Mobility" },
]

export function InstructorsPreview() {
  const { t } = useLanguage()

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              {t("instructors.title")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {t("instructors.subtitle")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, i) => (
            <FadeIn key={instructor.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{instructor.name}</h3>
                  <p className="text-sm text-primary">{instructor.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {instructor.exp} {t("instructors.experience")}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{instructor.speciality}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link to="/instructors">
            <Button variant="outline" className="rounded-full">
              {t("instructors.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
