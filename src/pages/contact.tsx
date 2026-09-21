import { useLanguage } from "@/i18n"
import { PageTransition, FadeIn } from "@/components/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    toast.success(t("contact.thankYou"))
  }

  return (
    <PageTransition>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{t("contact.title")}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <FadeIn>
              <a
                href={`https://wa.me/919876548123?text=${encodeURIComponent(t("common.whatsappBooking"))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="h-full border-border/50 text-center transition-all hover:border-primary/30 hover:shadow-md cursor-pointer">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10">
                      <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <h3 className="mt-3 font-semibold">{t("contact.whatsapp")}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">+91 98765 48123</p>
                  </CardContent>
                </Card>
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <a href="tel:+919876548123">
                <Card className="h-full border-border/50 text-center transition-all hover:border-primary/30 hover:shadow-md cursor-pointer">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-3 font-semibold">{t("contact.callUs")}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">+91 98765 48123</p>
                  </CardContent>
                </Card>
              </a>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a href="mailto:hello@arohayogaatelier.com">
                <Card className="h-full border-border/50 text-center transition-all hover:border-primary/30 hover:shadow-md cursor-pointer">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-3 font-semibold">{t("contact.emailUs")}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">hello@arohayogaatelier.com</p>
                  </CardContent>
                </Card>
              </a>
            </FadeIn>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              {submitted ? (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">{t("contact.thankYou")}</h3>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">{t("contact.name")}</Label>
                        <Input id="name" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">{t("contact.email")}</Label>
                        <Input id="email" type="email" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t("contact.phone")}</Label>
                        <Input id="phone" type="tel" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="message">{t("contact.message")}</Label>
                        <Textarea id="message" required rows={4} className="mt-1" />
                      </div>
                      <Button type="submit" className="w-full rounded-full">
                        {t("contact.send")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sm">{t("contact.landmark")}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{t("contact.address")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sm mb-3">{t("contact.hours")}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
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
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-xl overflow-hidden border border-border/50 h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7!2d77.15!3d28.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVasant+Vihar%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Studio Location"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
