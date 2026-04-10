"use client"

import { Card } from "@heroui/react/card"
import Link from "next/link"
import { useMemo } from "react"

import { Container } from "@/components/site/container"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"
import { TocMobile, TocSidebar } from "@/components/docs/toc"

type Section = {
  id: string
  title: string
  summary: string
  points: string[]
}

const SECTIONS: Section[] = [
  {
    id: "overview",
    title: "Overview",
    summary:
      "Tuno helps groups run Vikoba (savings) and Mchezo (rotation) with clear rules and shared records.",
    points: [
      "One place for rules, members, and history",
      "Transparent status: paid, pending, next",
      "Works for both Vikoba and Mchezo",
    ],
  },
  {
    id: "create-group",
    title: "Create a Group",
    summary:
      "Start by creating a group and setting the basics: contribution amount, schedule, and roles.",
    points: [
      "Define contribution amount and frequency",
      "Invite members and assign roles",
      "Keep rules visible for everyone",
    ],
  },
  {
    id: "vikoba",
    title: "Vikoba (Savings)",
    summary:
      "Track savings contributions and balances with a clean history your group can trust.",
    points: [
      "Record contributions and view totals",
      "See per-member balances at a glance",
      "Export or review history when needed",
    ],
  },
  {
    id: "mchezo",
    title: "Mchezo (Rotation)",
    summary:
      "Run rotating contributions with a visible recipient order and clear due dates.",
    points: [
      "Configure recipient order for cycles",
      "Track due dates and payment status",
      "Keep the cycle fair and predictable",
    ],
  },
  {
    id: "roles",
    title: "Members & Roles",
    summary:
      "Keep roles organized so coordination stays smooth for contributions and approvals.",
    points: [
      "Invite or remove members securely",
      "Assign roles for oversight and approvals",
      "Everyone sees the same information",
    ],
  },
  {
    id: "tips",
    title: "Tips",
    summary:
      "Simple habits keep groups on track: confirm entries, check status, and keep rules up-to-date.",
    points: [
      "Confirm payments as soon as they're made",
      "Use shared history to resolve questions",
      "Update rules when your group agrees",
    ],
  },
]

export default function HowItWorksPage() {
  const tocItems = useMemo(
    () => SECTIONS.map((s) => ({ id: s.id, title: s.title })),
    [],
  )

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Header section - completely separate */}
        <div className="border-b border-divider/70">
          <Container className="py-12 md:py-16">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              How it works
            </h1>
            <p className="mt-3 max-w-2xl text-base text-foreground/75">
              Learn the basics of setting up your group, running Vikoba or Mchezo, and
              keeping records clear for everyone.
            </p>
          </Container>
        </div>

        {/* Content section with sidebar and main content */}
        <Container className="py-6 md:py-10">
          <TocMobile items={tocItems} />
          
          {/* Desktop layout */}
          <div className="hidden md:flex md:gap-8">
            {/* Left sidebar */}
            <div className="w-[240px] lg:w-[280px] flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
                  On this page
                </h3>
                <nav className="flex flex-col space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleAnchorClick(e, item.id)}
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground hover:underline underline-offset-2"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 space-y-8">
              {SECTIONS.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24"
                >
                  <Card variant="secondary" className="border border-divider/70 p-6">
                    <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
                    <p className="mt-2 text-sm text-foreground/75">{s.summary}</p>
                    {s.points.length ? (
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground/80">
                        {s.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    ) : null}
                  </Card>
                </section>
              ))}

              <div className="flex justify-end">
                <Link
                  href="/#how-it-works"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-divider/70 bg-background px-6 text-sm font-medium text-foreground shadow-sm hover:bg-content2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="block md:hidden space-y-8">
            {SECTIONS.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-24"
              >
                <Card variant="secondary" className="border border-divider/70 p-6">
                  <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
                  <p className="mt-2 text-sm text-foreground/75">{s.summary}</p>
                  {s.points.length ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground/80">
                      {s.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  ) : null}
                </Card>
              </section>
            ))}

            <div className="flex justify-end">
              <Link
                href="/#how-it-works"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-divider/70 bg-background px-6 text-sm font-medium text-foreground shadow-sm hover:bg-content2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                Back to home
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}