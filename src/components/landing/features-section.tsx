"use client"

import { Card } from "@heroui/react/card"
import { Chip } from "@heroui/react/chip"
import type { ReactNode } from "react"

import { useI18n } from "@/app/providers"
import { IconCoins, IconRepeat, IconShieldCheck } from "@/components/icons"

import { Container } from "../site/container"

type Feature = {
  title: string
  description: string
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <Card
      variant="secondary"
      className="border border-divider/70 p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-content2 text-foreground">
          {icon}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-sm text-foreground/70">{description}</p>
        </div>
      </div>
    </Card>
  )
}

function ProductBlock({
  id,
  label,
  title,
  description,
  features,
}: {
  id: string
  label: string
  title: string
  description: string
  features: Feature[]
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex flex-col gap-3">
        <Chip variant="soft" color="default" className="w-fit">
          {label}
        </Chip>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <p className="max-w-2xl text-base text-foreground/75">{description}</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <Card
            key={f.title}
            variant="secondary"
            className="border border-divider/70 p-6"
          >
            <p className="text-sm font-semibold">{f.title}</p>
            <p className="mt-2 text-sm text-foreground/70">{f.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function FeaturesSection() {
  const { t } = useI18n()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {t.home.builtForTitle}
          </h2>
          <p className="max-w-2xl text-base text-foreground/75">
            {t.home.builtForSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<IconShieldCheck className="h-5 w-5" />}
            title={t.home.feature1Title}
            description={t.home.feature1Desc}
          />
          <FeatureCard
            icon={<IconCoins className="h-5 w-5" />}
            title={t.home.feature2Title}
            description={t.home.feature2Desc}
          />
          <FeatureCard
            icon={<IconRepeat className="h-5 w-5" />}
            title={t.home.feature3Title}
            description={t.home.feature3Desc}
          />
        </div>

        <div className="mt-16 space-y-16">
          <ProductBlock
            id="vikoba"
            label="Vikoba"
            title="Group savings that stay organized."
            description="Track member contributions, balances, and savings progress with a clean history everyone understands."
            features={[
              {
                title: "Contributions & receipts",
                description:
                  "Record payments and keep a clear contribution history for the whole group.",
              },
              {
                title: "Balances and summaries",
                description:
                  "See totals at a glance—how much has been saved and by whom.",
              },
              {
                title: "Rules made visible",
                description:
                  "Document group rules so everyone follows the same process and decisions.",
              },
            ]}
          />

          <ProductBlock
            id="mchezo"
            label="Mchezo"
            title="Rotation schedules that don’t break."
            description="Run a rotating contribution system with a visible order, clear due dates, and straightforward status tracking."
            features={[
              {
                title: "Recipient order",
                description:
                  "Keep the rotation order clear, so everyone knows who receives next.",
              },
              {
                title: "Due dates & reminders",
                description:
                  "Make payments predictable with clear timing and lightweight reminders.",
              },
              {
                title: "Late and missed payments",
                description:
                  "Track exceptions clearly, so the group can resolve issues fairly.",
              },
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
