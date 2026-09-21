import { useLanguage } from "@/i18n"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/layout/language-toggle"

export function Header() {
  const { t } = useLanguage()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/classes", label: t("nav.classes") },
    { path: "/schedule", label: t("nav.schedule") },
    { path: "/instructors", label: t("nav.instructors") },
    { path: "/membership", label: t("nav.membership") },
    { path: "/workshops", label: t("nav.workshops") },
    { path: "/contact", label: t("nav.contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl safe-top">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.webp" alt="Aroha Yoga Atelier" className="h-9 w-9" />
          <div>
            <span className="font-heading text-lg font-semibold tracking-tight">Aroha</span>
            <span className="ml-1 text-xs text-muted-foreground">Yoga Atelier</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
          <Link to="/membership" className="hidden md:block">
            <Button size="sm" className="rounded-full">
              {t("nav.bookTrial")}
            </Button>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 pt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link to="/faq" onClick={() => setOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  {t("nav.faq")}
                </Link>
                <div className="pt-4">
                  <Link to="/membership" onClick={() => setOpen(false)}>
                    <Button className="w-full rounded-full">{t("nav.bookTrial")}</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
