import { useLanguage } from "@/i18n"
import { Link, useLocation } from "react-router-dom"
import { Home, Layers, Calendar, CreditCard, Menu } from "lucide-react"

export function BottomNav() {
  const { t } = useLanguage()
  const location = useLocation()

  const items = [
    { path: "/", icon: Home, label: t("nav.home") },
    { path: "/classes", icon: Layers, label: t("nav.classes") },
    { path: "/schedule", icon: Calendar, label: t("nav.schedule") },
    { path: "/membership", icon: CreditCard, label: t("nav.membership") },
    { path: "/more", icon: Menu, label: t("nav.more") },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md safe-bottom md:hidden">
      <div className="flex items-center justify-around py-2">
        {items.map((item) => {
          const isActive = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
