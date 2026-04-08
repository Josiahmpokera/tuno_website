"use client"

import { Card } from "@heroui/react/card"
import { Chip } from "@heroui/react/chip"

import { useI18n } from "@/app/providers"

import { Container } from "../site/container"

export function HowItWorksSection() {
  const { t } = useI18n()

  const steps = [
    { title: t.home.step1Title, description: t.home.step1Desc },
    { title: t.home.step2Title, description: t.home.step2Desc },
    { title: t.home.step3Title, description: t.home.step3Desc },
  ]

  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-3">
          <Chip variant="soft" color="default" className="w-fit">
            {t.nav.howItWorks}
          </Chip>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {t.home.howItWorksTitle}
          </h2>
          <p className="max-w-2xl text-base text-foreground/75">
            {t.home.howItWorksSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <Card
              key={step.title}
              variant="secondary"
              className="border border-divider/70 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-content2 text-sm font-semibold">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
