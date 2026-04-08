"use client"

import { Card } from "@heroui/react/card"
import { Chip } from "@heroui/react/chip"
import { Slider } from "@heroui/react/slider"
import Link from "next/link"
import { useMemo, useState } from "react"

import { useI18n } from "@/app/providers"
import { Container } from "@/components/site/container"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"

type PricingTier = {
  maxMembers: number
  monthlyTzs: number
}

const vikobaTiers: PricingTier[] = [
  { maxMembers: 10, monthlyTzs: 10000 },
  { maxMembers: 20, monthlyTzs: 18000 },
  { maxMembers: 50, monthlyTzs: 35000 },
  { maxMembers: 100, monthlyTzs: 60000 },
]

function formatTzs(amount: number) {
  return `TZS ${amount.toLocaleString("en-US")}`
}

function getTierPrice(memberCount: number) {
  return vikobaTiers.find((t) => memberCount <= t.maxMembers) ?? vikobaTiers[vikobaTiers.length - 1]
}

export default function PricingPage() {
  const { t } = useI18n()
  const [members, setMembers] = useState<number>(12)

  const tier = useMemo(() => getTierPrice(members), [members])

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-divider/70">
          <Container className="py-16 md:py-20">
            <Chip variant="soft" color="default" className="w-fit">
              {t.nav.pricing}
            </Chip>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.pricing.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-foreground/75">
              {t.pricing.subtitle}
            </p>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border border-divider/70">
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm font-semibold">{t.pricing.planTitle}</p>
                      <p className="mt-2 text-sm text-foreground/70">
                        {t.pricing.planSubtitle}
                      </p>
                    </div>
                    <Chip variant="soft" color="success" className="shrink-0">
                      {t.pricing.subscriptionTag}
                    </Chip>
                  </div>

                  <div className="mt-8 rounded-xl border border-divider/70 bg-surface p-5">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-sm font-medium">{t.pricing.membersLabel}</p>
                        <p className="mt-1 text-xs text-foreground/70">
                          {members} {t.pricing.membersUnit}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-semibold tracking-tight">
                          {formatTzs(tier.monthlyTzs)}
                        </div>
                        <div className="text-sm text-foreground/70">{t.pricing.monthlyLabel}</div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <Slider
                        minValue={5}
                        maxValue={100}
                        step={1}
                        value={members}
                        onChange={(v) => setMembers(v as number)}
                        aria-label={t.pricing.membersLabel}
                      >
                        <Slider.Track className="h-2 rounded-full bg-surface-tertiary">
                          <Slider.Fill className="h-2 rounded-full bg-primary" />
                        </Slider.Track>
                        <Slider.Thumb className="h-5 w-5 rounded-full border border-divider bg-surface shadow-sm" />
                      </Slider>
                    </div>

                    <div className="mt-4 text-xs text-foreground/70">
                      {t.pricing.note}
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold">{t.pricing.priceIncludes}</p>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/75">
                      <li>{t.pricing.includes1}</li>
                      <li>{t.pricing.includes2}</li>
                      <li>{t.pricing.includes3}</li>
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="mailto:sales@tuno.app"
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    >
                      {t.pricing.cta}
                    </a>
                    <Link
                      href="/help"
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-divider/70 bg-background px-6 text-sm font-medium text-foreground shadow-sm hover:bg-content2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    >
                      {t.nav.help}
                    </Link>
                  </div>
                </div>
              </Card>

              <Card variant="secondary" className="border border-divider/70">
                <div className="p-8 md:p-10">
                  <p className="text-sm font-semibold">{t.pricing.howWorksTitle}</p>
                  <p className="mt-2 text-sm text-foreground/70">
                    {t.pricing.howWorksDesc}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {vikobaTiers.map((tierRow) => (
                      <div
                        key={tierRow.maxMembers}
                        className="flex items-center justify-between rounded-xl border border-divider/70 bg-surface p-4"
                      >
                        <div className="text-sm font-medium">
                          {t.pricing.upToMembers} {tierRow.maxMembers} {t.pricing.membersUnit}
                        </div>
                        <div className="text-sm text-foreground/80">
                          {formatTzs(tierRow.monthlyTzs)}
                          {t.pricing.perMonthShort}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
