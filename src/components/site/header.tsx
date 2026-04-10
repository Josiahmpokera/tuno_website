"use client"

import { Chip } from "@heroui/react/chip"
import { Link } from "@heroui/react/link"
import NextLink from "next/link"

import { useI18n, useTheme } from "@/app/providers"
import { cn } from "@/lib/cn"

import { Container } from "./container"

export function Header() {
  const { locale, setLocale, t } = useI18n()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: "/#vikoba", label: t.nav.vikoba },
    { href: "/#mchezo", label: t.nav.mchezo },
    { href: "/how-it-works", label: t.nav.howItWorks },
    { href: "/#faq", label: t.nav.faq },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/help", label: t.nav.help },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-divider/70 bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/#top"
            className="text-base font-semibold tracking-tight text-foreground"
          >
            Tuno
          </Link>
          <Chip size="sm" variant="soft" className="hidden sm:inline-flex">
            Mobile app
          </Chip>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </NextLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale(locale === "sw" ? "en" : "sw")}
              className={cn(
                "h-10 rounded-xl border border-divider/70 bg-surface px-3 text-sm font-medium text-foreground shadow-sm",
                "hover:bg-surface-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
              )}
              aria-label={t.common.language}
            >
              {locale.toUpperCase()}
            </button>
            <div
              className={cn(
                "relative inline-flex h-10 w-[156px] items-center rounded-xl border border-divider/70 bg-surface p-1 shadow-sm",
                "focus-within:ring-2 focus-within:ring-primary/30",
              )}
              role="group"
              aria-label="Theme"
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-lg bg-surface-secondary shadow-sm transition-transform duration-200",
                  theme === "dark" ? "translate-x-0" : "translate-x-full",
                )}
              />
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={cn(
                  "relative z-10 inline-flex w-1/2 items-center justify-center rounded-lg px-2 text-xs font-medium transition-colors",
                  theme === "dark" ? "text-foreground" : "text-foreground/70 hover:text-foreground",
                )}
              >
                {t.common.themeDark}
              </button>
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={cn(
                  "relative z-10 inline-flex w-1/2 items-center justify-center rounded-lg px-2 text-xs font-medium transition-colors",
                  theme === "light" ? "text-foreground" : "text-foreground/70 hover:text-foreground",
                )}
              >
                {t.common.themeLight}
              </button>
            </div>
          </div>
          <Link
            href="/#download"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm",
              "hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
            )}
          >
            {t.nav.getApp}
          </Link>
        </div>
      </Container>
    </header>
  )
}
