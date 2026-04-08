"use client"

import { SearchField } from "@heroui/react/search-field"
import Link from "next/link"
import { useMemo, useState } from "react"

import { useI18n } from "@/app/providers"
import { cn } from "@/lib/cn"

export type HelpArticle = {
  title: string
  description: string
  href: string
  tags: string[]
}

type HelpSearchProps = {
  articles: HelpArticle[]
}

export function HelpSearch({ articles }: HelpSearchProps) {
  const { t } = useI18n()
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return articles
      .map((a) => {
        const haystack = `${a.title} ${a.description} ${a.tags.join(" ")}`.toLowerCase()
        return { a, score: haystack.includes(q) ? 1 : 0 }
      })
      .filter((x) => x.score > 0)
      .map((x) => x.a)
      .slice(0, 8)
  }, [articles, query])

  return (
    <div className="space-y-4">
      <SearchField
        value={query}
        onChange={setQuery}
        aria-label="Search help articles"
        className="w-full"
        fullWidth
      >
        <SearchField.Group className="h-12 rounded-xl border border-divider/70 bg-surface px-3 shadow-sm">
          <SearchField.SearchIcon className="text-foreground/60" />
          <SearchField.Input
            placeholder={t.help.searchPlaceholder}
            className="text-sm"
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      {results.length ? (
        <div className="rounded-xl border border-divider/70 bg-surface p-2">
          <p className="px-3 py-2 text-xs font-medium text-foreground/70">
            {t.help.topResults}
          </p>
          <div className="grid gap-1">
            {results.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm",
                  "hover:bg-surface-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                )}
              >
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-foreground/70">{a.description}</div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
