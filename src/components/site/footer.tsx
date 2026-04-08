"use client"

import { Link } from "@heroui/react/link"

import { useI18n } from "@/app/providers"

import { Container } from "./container"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-divider/70 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold">Tuno</p>
          <p className="text-sm text-foreground/70">
            {t.footer.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/#vikoba" className="text-foreground/70 hover:text-foreground">
            {t.nav.vikoba}
          </Link>
          <Link href="/#mchezo" className="text-foreground/70 hover:text-foreground">
            {t.nav.mchezo}
          </Link>
          <Link href="/pricing" className="text-foreground/70 hover:text-foreground">
            {t.nav.pricing}
          </Link>
          <Link
            href="/help"
            className="text-foreground/70 hover:text-foreground"
          >
            {t.footer.help}
          </Link>
          <Link
            href="/#download"
            className="text-foreground/70 hover:text-foreground"
          >
            {t.footer.download}
          </Link>
        </div>
      </Container>
    </footer>
  )
}
