"use client"

import { Accordion } from "@heroui/react/accordion"
import { Chip } from "@heroui/react/chip"

import { useI18n } from "@/app/providers"

import { Container } from "../site/container"

const faqs = [
  {
    q: "What is Vikoba in Tuno?",
    a: "Vikoba is group savings. Tuno helps you track contributions, totals, and a clear history so members stay aligned.",
  },
  {
    q: "What is Mchezo in Tuno?",
    a: "Mchezo is a rotating contribution. Tuno keeps the recipient order and due dates visible so the cycle stays fair and predictable.",
  },
  {
    q: "Do members see the same records?",
    a: "Yes. Tuno is designed around transparency—everyone can see payments and statuses based on the group rules.",
  },
  {
    q: "Can we handle late or missed payments?",
    a: "Yes. When someone is late, the status stays visible so the group can decide how to resolve it without confusion.",
  },
  {
    q: "Is Tuno a bank?",
    a: "No. Tuno is a management tool for group routines. It helps you organize records and schedules for your group.",
  },
  {
    q: "Is the app available now?",
    a: "This landing page can link to your app store listings when ready. For now, you can place a download CTA and contact info here.",
  },
]

export function FaqSection() {
  const { t } = useI18n()

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-3">
          <Chip variant="soft" color="default" className="w-fit">
            {t.nav.faq}
          </Chip>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {t.home.faqTitle}
          </h2>
          <p className="max-w-2xl text-base text-foreground/75">
            {t.home.faqSubtitle}
          </p>
        </div>

        <div className="mt-10">
          <Accordion variant="surface">
            {faqs.map((item) => (
              <Accordion.Item key={item.q}>
                <Accordion.Heading>
                  <Accordion.Trigger>{item.q}</Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="text-sm text-foreground/70">
                    {item.a}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
