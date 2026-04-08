"use client"

import { Card } from "@heroui/react/card"
import { Chip } from "@heroui/react/chip"
import Link from "next/link"
import type { ReactNode } from "react"

import { useI18n } from "@/app/providers"
import { HelpSearch, type HelpArticle } from "@/components/help/help-search"
import { IconCoins, IconRepeat, IconShieldCheck, IconSparkles, IconUsers } from "@/components/icons"
import { Container } from "@/components/site/container"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"

type HelpCategory = {
  title: string
  description: string
  href: string
  icon: ReactNode
}

const articles: HelpArticle[] = [
  {
    title: "Getting started with Tuno",
    description: "Create your first group and set the rules for Vikoba or Mchezo.",
    href: "/help#getting-started",
    tags: ["setup", "group", "rules"],
  },
  {
    title: "How Vikoba works in Tuno",
    description: "Track savings contributions, balances, and group totals clearly.",
    href: "/help#vikoba",
    tags: ["vikoba", "savings", "contributions"],
  },
  {
    title: "How Mchezo rotation works",
    description: "Understand recipient order, due dates, and payout cycles.",
    href: "/help#mchezo",
    tags: ["mchezo", "rotation", "cycle"],
  },
  {
    title: "Adding and managing members",
    description: "Invite members, assign roles, and keep everyone in sync.",
    href: "/help#members",
    tags: ["members", "roles", "invite"],
  },
  {
    title: "Payments, receipts, and transparency",
    description: "Keep records visible and reduce misunderstandings in the group.",
    href: "/help#records",
    tags: ["payments", "records", "receipts"],
  },
  {
    title: "Troubleshooting common issues",
    description: "Fix login issues, sync problems, and contribution mismatches.",
    href: "/help#troubleshooting",
    tags: ["troubleshoot", "issues", "help"],
  },
]

const categories: HelpCategory[] = [
  {
    title: "Getting Started",
    description: "Create groups, set rules, and invite members.",
    href: "#getting-started",
    icon: <IconSparkles className="h-5 w-5 text-primary" />,
  },
  {
    title: "Vikoba Savings",
    description: "Track contributions and balances for group savings.",
    href: "#vikoba",
    icon: <IconCoins className="h-5 w-5 text-primary" />,
  },
  {
    title: "Mchezo Rotation",
    description: "Manage rotation order, due dates, and payouts.",
    href: "#mchezo",
    icon: <IconRepeat className="h-5 w-5 text-primary" />,
  },
  {
    title: "Members & Roles",
    description: "Invite people and keep roles organized.",
    href: "#members",
    icon: <IconUsers className="h-5 w-5 text-primary" />,
  },
  {
    title: "Records & Trust",
    description: "Receipts, payment status, and transparency.",
    href: "#records",
    icon: <IconShieldCheck className="h-5 w-5 text-primary" />,
  },
]

export default function HelpPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-divider/70">
          <Container className="py-16 md:py-20">
            <Chip variant="soft" color="default" className="w-fit">
              {t.help.title}
            </Chip>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.help.heading}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-foreground/75">
              {t.help.subtitle}
            </p>

            <div className="mt-8 max-w-2xl">
              <HelpSearch articles={articles} />
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {t.help.browseTitle}
                </h2>
                <p className="mt-2 text-sm text-foreground/70">
                  {t.help.browseSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => (
                <a key={c.href} href={c.href} className="group">
                  <Card variant="secondary" className="border border-divider/70 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-tertiary">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{c.title}</p>
                        <p className="mt-1 text-sm text-foreground/70">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              {t.help.popularTitle}
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              {t.help.popularSubtitle}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {articles.slice(0, 4).map((a) => (
                <Link key={a.href} href={a.href}>
                  <Card variant="secondary" className="border border-divider/70 p-6">
                    <p className="text-sm font-semibold">{a.title}</p>
                    <p className="mt-2 text-sm text-foreground/70">{a.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {a.tags.slice(0, 3).map((t) => (
                        <Chip key={t} size="sm" variant="soft" color="default">
                          {t}
                        </Chip>
                      ))}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              {t.help.guidesTitle}
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              {t.help.guidesSubtitle}
            </p>

            <div className="mt-8 grid gap-4">
              <Card
                id="getting-started"
                variant="secondary"
                className="scroll-mt-24 border border-divider/70 p-6"
              >
                <p className="text-sm font-semibold">Getting started</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Create a group, choose Vikoba or Mchezo, and define the contribution
                  rules. Keep everything visible so members stay aligned.
                </p>
              </Card>

              <Card
                id="vikoba"
                variant="secondary"
                className="scroll-mt-24 border border-divider/70 p-6"
              >
                <p className="text-sm font-semibold">Vikoba savings</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Use Vikoba for group savings. Track member contributions, balances,
                  and totals with a clear history.
                </p>
              </Card>

              <Card
                id="mchezo"
                variant="secondary"
                className="scroll-mt-24 border border-divider/70 p-6"
              >
                <p className="text-sm font-semibold">Mchezo rotation</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Use Mchezo for rotating payouts. Keep the recipient order and due
                  dates visible so the cycle stays fair and predictable.
                </p>
              </Card>

              <Card
                id="members"
                variant="secondary"
                className="scroll-mt-24 border border-divider/70 p-6"
              >
                <p className="text-sm font-semibold">Members & roles</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Invite members and define roles. A clear structure helps groups
                  avoid misunderstandings.
                </p>
              </Card>

              <Card
                id="records"
                variant="secondary"
                className="scroll-mt-24 border border-divider/70 p-6"
              >
                <p className="text-sm font-semibold">Records & transparency</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Keep payment status visible, attach notes or receipts, and ensure
                  the whole group sees the same information.
                </p>
              </Card>

              <Card
                id="troubleshooting"
                variant="secondary"
                className="scroll-mt-24 border border-divider/70 p-6"
              >
                <p className="text-sm font-semibold">Troubleshooting</p>
                <p className="mt-2 text-sm text-foreground/70">
                  If something looks wrong, confirm the latest payment entries, check
                  the member list, and refresh before contacting support.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <Card className="border border-divider/70">
              <div className="p-8 md:p-10">
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {t.help.stillStuckTitle}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-foreground/70">
                  {t.help.stillStuckSubtitle}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:support@tuno.app"
                    className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    {t.help.emailSupport}
                  </a>
                  <Link
                    href="/#download"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-divider/70 bg-background px-6 text-sm font-medium text-foreground shadow-sm hover:bg-content2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  >
                    {t.help.backHome}
                  </Link>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
