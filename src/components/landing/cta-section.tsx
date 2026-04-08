"use client"

import { Card } from "@heroui/react/card"
import { Link } from "@heroui/react/link"

import { useI18n } from "@/app/providers"
import { IconArrowRight, IconSparkles } from "@/components/icons"
import { cn } from "@/lib/cn"

import { Container } from "../site/container"

export function CtaSection() {
  const { t } = useI18n()

  return (
    <section id="download" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <Card className="overflow-hidden border border-divider/60">
          <div className="relative p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/12 via-transparent to-brand-secondary/12" />
            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <IconSparkles className="h-5 w-5 text-primary" />
                  {t.home.downloadTitle}
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Keep your group on track—every contribution, every cycle.
                </h2>
                <p className="mt-4 max-w-xl text-base text-foreground/75">
                  {t.home.downloadSubtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#"
                    className={cn(
                      "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm",
                      "hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                    )}
                  >
                    {t.home.googlePlay} <IconArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className={cn(
                      "inline-flex h-11 items-center justify-center rounded-xl border border-divider/70 bg-background px-6 text-sm font-medium text-foreground shadow-sm",
                      "hover:bg-content2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                    )}
                  >
                    {t.home.appStore}
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card
                  variant="secondary"
                  className="border border-divider/70 p-6"
                >
                  <p className="text-sm font-semibold">For group leaders</p>
                  <p className="mt-2 text-sm text-foreground/70">
                    Set rules once and keep decisions visible for the whole group.
                  </p>
                </Card>
                <Card
                  variant="secondary"
                  className="border border-divider/70 p-6"
                >
                  <p className="text-sm font-semibold">For members</p>
                  <p className="mt-2 text-sm text-foreground/70">
                    Know what’s due, what’s paid, and who receives next—anytime.
                  </p>
                </Card>
                <Card
                  variant="secondary"
                  className="border border-divider/70 p-6 sm:col-span-2"
                >
                  <p className="text-sm font-semibold">For the whole group</p>
                  <p className="mt-2 text-sm text-foreground/70">
                    Reduce misunderstandings with shared records and predictable
                    schedules.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  )
}
