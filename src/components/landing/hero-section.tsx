"use client"

import { Card } from "@heroui/react/card"
import { Chip } from "@heroui/react/chip"
import { Link } from "@heroui/react/link"
import { motion } from "framer-motion"
import Image from "next/image"

import { useI18n } from "@/app/providers"
import { IconArrowRight, IconCoins, IconShieldCheck, IconUsers } from "@/components/icons"
import phoneImage from "@/assets/img/xNURI.png"
import { cn } from "@/lib/cn"

import { Container } from "../site/container"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-320px] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-240px] top-[140px] h-[520px] w-[520px] rounded-full bg-brand-secondary/18 blur-3xl" />
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <Chip variant="primary" color="accent" className="inline-flex">
              {t.home.badge}
            </Chip>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base text-foreground/75 md:text-lg">
              {t.home.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#download"
                className={cn(
                  "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm",
                  "hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                )}
              >
                {t.home.ctaPrimary} <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#how-it-works"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-xl border border-divider/70 bg-background px-6 text-sm font-medium text-foreground shadow-sm",
                  "hover:bg-content2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                )}
              >
                {t.home.ctaSecondary}
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Card
                variant="secondary"
                className="border border-divider/70 p-4"
              >
                <div className="flex items-center gap-3">
                  <IconUsers className="h-5 w-5 text-foreground/80" />
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Group-ready</p>
                    <p className="text-xs text-foreground/70">Roles & members</p>
                  </div>
                </div>
              </Card>
              <Card
                variant="secondary"
                className="border border-divider/70 p-4"
              >
                <div className="flex items-center gap-3">
                  <IconCoins className="h-5 w-5 text-foreground/80" />
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Contributions</p>
                    <p className="text-xs text-foreground/70">Clear history</p>
                  </div>
                </div>
              </Card>
              <Card
                variant="secondary"
                className="col-span-2 border border-divider/70 p-4 sm:col-span-1"
              >
                <div className="flex items-center gap-3">
                  <IconShieldCheck className="h-5 w-5 text-foreground/80" />
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Transparent</p>
                    <p className="text-xs text-foreground/70">Everyone in sync</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative flex flex-col items-center justify-center gap-6">
                <Image
                  src={phoneImage}
                  alt={t.home.rightImageAlt}
                  className="mx-auto h-[440px] w-auto object-contain"
                  sizes="(min-width: 768px) 520px, 100vw"
                  priority
                />

                <div className="flex w-full items-center justify-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Card
                        variant="secondary"
                        className="border border-divider/70 px-3 py-2"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <IconCoins className="h-4 w-4 text-primary" />
                          <span className="text-xs font-semibold">
                            {t.home.rightVikobaTitle}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                  >
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Card
                        variant="secondary"
                        className="border border-divider/70 px-3 py-2"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <IconUsers className="h-4 w-4 text-primary" />
                          <span className="text-xs font-semibold">
                            {t.home.rightMchezoTitle}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
