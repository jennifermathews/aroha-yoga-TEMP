import { useLanguage } from "@/i18n"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE = "919876548123"

export function WhatsAppButton() {
  const { t } = useLanguage()
  const message = encodeURIComponent(t("common.whatsappBooking"))
  const url = `https://wa.me/${PHONE}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-6 w-6 text-white" fill="white" />
      </Button>
    </a>
  )
}
