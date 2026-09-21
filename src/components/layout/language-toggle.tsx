import { useLanguage } from "@/i18n"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center rounded-full border border-border bg-muted/50 p-0.5">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        className="h-7 rounded-full px-2.5 text-xs font-medium"
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant={language === "hi" ? "default" : "ghost"}
        size="sm"
        className="h-7 rounded-full px-2.5 text-xs font-medium"
        onClick={() => setLanguage("hi")}
      >
        हि
      </Button>
    </div>
  )
}
