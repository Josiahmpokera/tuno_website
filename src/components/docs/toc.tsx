"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

type TocItem = {
  id: string
  title: string
}

export function useScrollSpy(ids: string[], offset = 80) {
  const [active, setActive] = useState<string>(ids[0] ?? "")

  useEffect(() => {
    if (!ids.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))
        if (visible[0]) {
          const id = visible[0].target.id
          setActive(id)
          if (window.location.hash !== `#${id}`) {
            history.replaceState(null, "", `#${id}`)
          }
        }
      },
      {
        // keep the active section when it's in the upper part of viewport
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: [0, 0.1, 0.5, 1],
      },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids, offset])

  return active
}

export function TocSidebar({ items }: { items: TocItem[] }) {
  const ids = useMemo(() => items.map((i) => i.id), [items])
  const active = useScrollSpy(ids, 80)

  return (
    <nav className="sticky top-20">
      <div className="rounded-xl border border-divider/70 bg-surface p-2">
        <div className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-foreground/60">
          On this page
        </div>
        <div className="mt-1 space-y-1">
          {items.map((s) => {
            const isActive = active === s.id
            return (
              <Link
                key={s.id}
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className={[
                  "block rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "border-l-2 border-primary bg-surface-tertiary text-foreground"
                    : "text-foreground/75 hover:text-foreground",
                ].join(" ")}
              >
                {s.title}
              </Link>
            )
          })}
        </div>
        <div className="mt-2 border-t border-divider/70 pt-2">
          <Link
            href={`#${items[0]?.id ?? ""}`}
            className="block rounded-lg px-3 py-2 text-xs text-foreground/70 hover:text-foreground"
          >
            Back to top
          </Link>
        </div>
      </div>
    </nav>
  )
}

export function TocMobile({ items }: { items: TocItem[] }) {
  const ids = useMemo(() => items.map((i) => i.id), [items])
  const active = useScrollSpy(ids, 80)

  return (
    <div className="sticky top-16 z-10 -mx-4 mb-4 border-b border-divider/70 bg-background/90 px-4 py-3 backdrop-blur sm:-mx-6 lg:hidden">
      <div className="flex flex-wrap gap-2">
        {items.map((s) => {
          const isActive = active === s.id
          return (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className={[
                "rounded-lg px-3 py-1.5 text-xs font-medium",
                isActive
                  ? "bg-surface-tertiary text-foreground"
                  : "bg-surface text-foreground/80 hover:text-foreground",
              ].join(" ")}
            >
              {s.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

