import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const instructors = [
  {
    name: "Kavya Raithatha",
    role: "Lead Yoga Educator",
    roleHi: "मुख्य योग शिक्षिका",
    exp: 11,
    image: "/instructor-kavya.webp",
    specializations: ["Vinyasa", "Breathwork", "Meditation"],
    specializationsHi: ["विन्यास", "प्राणायाम", "ध्यान"],
    bio: "Kavya's teaching emphasizes intelligent movement, breath awareness, and sustainable practice. She has trained extensively in yoga philosophy and movement education.",
    bioHi: "कव्या का शिक्षण बुद्धिमान गति, श्वास जागरूकता और टिकाऊ अभ्यास पर जोर देता है। उन्होंने योग दर्शन और गति शिक्षा में व्यापक प्रशिक्षण लिया है।",
    certifications: ["500-Hour YTT", "Meditation Facilitation", "Breathwork Practitioner"],
  },
  {
    name: "Ishaan Vedant",
    role: "Therapeutic Yoga Specialist",
    roleHi: "चिकित्सीय योग विशेषज्ञ",
    exp: 9,
    image: "/instructor-ishaan.webp",
    specializations: ["Injury Recovery", "Mobility", "Corrective Movement"],
    specializationsHi: ["चोट से रिकवरी", "गतिशीलता", "सुधारात्मक गति"],
    bio: "Ishaan works with students recovering from sedentary lifestyles, chronic stiffness, and postural imbalances.",
    bioHi: "ईशान बैठे रहने की जीवनशैली, पुरानी अकड़न और मुद्रा असंतुलन से उबरने वाले छात्रों के साथ काम करते हैं।",
    certifications: ["500-Hour YTT", "Functional Movement Specialist", "Yoga Therapy"],
  },
  {
    name: "Meher Ahuja",
    role: "Yin & Restorative Teacher",
    roleHi: "यिन और रिस्टोरेटिव शिक्षिका",
    exp: 8,
    image: "/instructor-meher.webp",
    specializations: ["Yin Yoga", "Restorative Practice", "Mindfulness"],
    specializationsHi: ["यिन योग", "रिस्टोरेटिव अभ्यास", "माइंडफुलनेस"],
    bio: "Meher creates deeply calming experiences focused on nervous system regulation and stress reduction.",
    bioHi: "मेहर तंत्रिका तंत्र के नियमन और तनाव कम करने पर केंद्रित गहन शांत अनुभव बनाती हैं।",
    certifications: ["Yin Yoga Certification", "Restorative Yoga", "Mindfulness Teacher"],
  },
  {
    name: "Rohan Sarin",
    role: "Strength Yoga Coach",
    roleHi: "शक्ति योग कोच",
    exp: 7,
    image: "/instructor-rohan.webp",
    specializations: ["Strength Training", "Athletic Mobility", "Functional Yoga"],
    specializationsHi: ["शक्ति प्रशिक्षण", "एथलेटिक गतिशीलता", "कार्यात्मक योग"],
    bio: "Rohan blends strength-focused movement with yogic principles to help practitioners develop resilience and balance.",
    bioHi: "रोहन शक्ति-केंद्रित गति को योगिक सिद्धांतों के साथ मिलाकर अभ्यासियों को लचीलापन और संतुलन विकसित करने में मदद करते हैं।",
    certifications: ["300-Hour YTT", "Functional Strength Coach"],
  },
]

export default function InstructorsPage() {
  const { t, language } = useLanguage()

  return (
    <PageTransition>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{t("instructors.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("instructors.subtitle")}</p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 space-y-8">
          {instructors.map((instructor, i) => (
            <FadeIn key={instructor.name} delay={i * 0.1}>
              <Card className="overflow-hidden border-border/50">
                <div className="flex flex-col md:flex-row">
                  <div className="aspect-square w-full md:w-64 shrink-0 overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <h3 className="font-heading text-2xl font-bold">{instructor.name}</h3>
                    <p className="text-primary font-medium">
                      {language === "hi" ? instructor.roleHi : instructor.role}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {instructor.exp} {t("instructors.experience")}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {language === "hi" ? instructor.bioHi : instructor.bio}
                    </p>
                    <div className="mt-4">
                      <p className="text-xs font-medium text-muted-foreground mb-2">
                        {t("instructors.specializations")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(language === "hi" ? instructor.specializationsHi : instructor.specializations).map((s) => (
                          <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs font-medium text-muted-foreground mb-2">
                        {t("instructors.certifications")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {instructor.certifications.map((c) => (
                          <Badge key={c} variant="outline" className="text-xs">{c}</Badge>
                        ))}
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block"
                    >
                      <Button size="sm" variant="outline" className="rounded-full text-xs">
                        {t("common.bookNow")}
                      </Button>
                    </a>
                  </CardContent>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
