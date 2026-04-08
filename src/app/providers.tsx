"use client"

import type { ReactNode } from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"
    const stored = window.localStorage.getItem("tuno_theme")
    if (stored === "dark" || stored === "light") return stored
    return "dark"
  })

  useEffect(() => {
    if (typeof document === "undefined") return
    const root = document.documentElement
    if (theme === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
    window.localStorage.setItem("tuno_theme", theme)
  }, [theme])

  const value = useMemo<ThemeContextValue>(() => {
    return {
      theme,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) throw new Error("useTheme must be used within ThemeProvider")
  return value
}

type Locale = "sw" | "en"

type Translations = {
  nav: {
    vikoba: string
    mchezo: string
    howItWorks: string
    faq: string
    help: string
    pricing: string
    getApp: string
  }
  common: {
    language: string
    themeDark: string
    themeLight: string
  }
  home: {
    badge: string
    heroTitle: string
    heroSubtitle: string
    ctaPrimary: string
    ctaSecondary: string
    rightImageAlt: string
    rightVikobaTitle: string
    rightMchezoTitle: string
    builtForTitle: string
    builtForSubtitle: string
    feature1Title: string
    feature1Desc: string
    feature2Title: string
    feature2Desc: string
    feature3Title: string
    feature3Desc: string
    howItWorksTitle: string
    howItWorksSubtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    faqTitle: string
    faqSubtitle: string
    downloadTitle: string
    downloadSubtitle: string
    googlePlay: string
    appStore: string
  }
  help: {
    title: string
    heading: string
    subtitle: string
    searchPlaceholder: string
    topResults: string
    browseTitle: string
    browseSubtitle: string
    popularTitle: string
    popularSubtitle: string
    guidesTitle: string
    guidesSubtitle: string
    stillStuckTitle: string
    stillStuckSubtitle: string
    emailSupport: string
    backHome: string
  }
  pricing: {
    title: string
    subtitle: string
    planTitle: string
    planSubtitle: string
    subscriptionTag: string
    membersLabel: string
    membersUnit: string
    monthlyLabel: string
    note: string
    priceIncludes: string
    includes1: string
    includes2: string
    includes3: string
    cta: string
    howWorksTitle: string
    howWorksDesc: string
    upToMembers: string
    perMonthShort: string
  }
  footer: {
    tagline: string
    download: string
    help: string
  }
}

const translations: Record<Locale, Translations> = {
  sw: {
    nav: {
      vikoba: "Vikoba",
      mchezo: "Mchezo",
      howItWorks: "Inavyofanya kazi",
      faq: "Maswali",
      help: "Msaada",
      pricing: "Bei",
      getApp: "Pakua App",
    },
    common: {
      language: "Lugha",
      themeDark: "Giza",
      themeLight: "Mwanga",
    },
    home: {
      badge: "Vikoba + Mchezo",
      heroTitle: "Ongoza vikundi vyako kwa uwazi na uaminifu.",
      heroSubtitle:
        "Tuno ni app ya simu kwa vikundi vinavyoweka akiba (Vikoba) na mzunguko wa michango (Mchezo). Fuata nani amelipa, nini kinadaiwa, na nani anapokea ijayo.",
      ctaPrimary: "Pakua App",
      ctaSecondary: "Angalia inavyofanya kazi",
      rightImageAlt: "Tuno app",
      rightVikobaTitle: "Vikoba",
      rightMchezoTitle: "Mchezo",
      builtForTitle: "Imeundwa kwa utaratibu wa vikundi halisi.",
      builtForSubtitle:
        "Iwe mnaweka akiba (Vikoba) au mzunguko wa michango (Mchezo), Tuno huweka sheria wazi na rekodi safi.",
      feature1Title: "Rekodi wazi",
      feature1Desc: "Wanachama huona michango, tarehe na hali bila sintofahamu.",
      feature2Title: "Ufuatiliaji rahisi",
      feature2Desc: "Jua aliye-lipa, anayesubiri, na jumla kwa sekunde.",
      feature3Title: "Mzunguko ulio wazi",
      feature3Desc: "Mpangilio wa mpokeaji na tarehe za michango huwa wazi kila wakati.",
      howItWorksTitle: "Hatua rahisi, tabia thabiti.",
      howItWorksSubtitle:
        "Sheria wazi, rekodi wazi, na mchakato unaoeleweka kwa kila mwanachama.",
      step1Title: "Unda kikundi",
      step1Desc: "Weka sheria: kiasi, ratiba, na majukumu ya wanachama.",
      step2Title: "Fuatilia michango",
      step2Desc: "Rekodi malipo ili kila mtu aone aliyelipa na anayesubiri.",
      step3Title: "Endesha Vikoba au Mchezo",
      step3Desc: "Akiba kwa malengo au mzunguko wa malipo kwa mpangilio ulio wazi.",
      faqTitle: "Majibu kwa haraka.",
      faqSubtitle: "Maswali ya kawaida kuhusu Vikoba, Mchezo na Tuno.",
      downloadTitle: "Anza na Tuno",
      downloadSubtitle:
        "Weka viungo vya app store ukimaliza. Kwa sasa unaweza kukusanya interest na mawasiliano.",
      googlePlay: "Google Play",
      appStore: "App Store",
    },
    help: {
      title: "Kituo cha Msaada",
      heading: "Tunawezaje kusaidia?",
      subtitle:
        "Tafuta majibu kuhusu Vikoba, Mchezo, michango, wanachama na rekodi za kikundi.",
      searchPlaceholder: "Tafuta mada, vipengele au changamoto…",
      topResults: "Matokeo ya juu",
      browseTitle: "Vinjari kwa kategoria",
      browseSubtitle: "Pata mada sahihi kwa haraka.",
      popularTitle: "Makala maarufu",
      popularSubtitle: "Miongozo inayotembelewa zaidi na vikundi vinavyotumia Tuno.",
      guidesTitle: "Miongozo",
      guidesSubtitle: "Hatua za vitendo kwa matumizi ya kila siku ya Tuno.",
      stillStuckTitle: "Bado umekwama?",
      stillStuckSubtitle:
        "Kama hujapata unachohitaji, wasiliana nasi na tutakusaidia.",
      emailSupport: "Tuma barua kwa msaada",
      backHome: "Rudi nyumbani",
    },
    pricing: {
      title: "Bei",
      subtitle:
        "Kifurushi kimoja cha usajili. Bei ya Vikoba inategemea idadi ya wanachama.",
      planTitle: "Usajili wa Tuno",
      planSubtitle: "Vikoba + Mchezo kwa vikundi vya kisasa.",
      subscriptionTag: "Usajili",
      membersLabel: "Idadi ya wanachama",
      membersUnit: "wanachama",
      monthlyLabel: "kwa mwezi",
      note: "Bei ya Vikoba hubadilika kulingana na idadi ya wanachama. Mchezo umejumuishwa kwenye usajili huo huo.",
      priceIncludes: "Inajumuisha",
      includes1: "Vikoba: rekodi za michango na muhtasari",
      includes2: "Mchezo: mpangilio wa mzunguko na tarehe",
      includes3: "Msaada na maboresho ya bidhaa",
      cta: "Wasiliana kwa usajili",
      howWorksTitle: "Jinsi bei inavyofanya kazi",
      howWorksDesc:
        "Kifurushi kimoja cha usajili. Bei ya Vikoba inategemea idadi ya wanachama wa kikundi.",
      upToMembers: "Hadi",
      perMonthShort: " / mwezi",
    },
    footer: {
      tagline: "Vikoba na Mchezo kwa vikundi vya kisasa.",
      download: "Pakua",
      help: "Kituo cha Msaada",
    },
  },
  en: {
    nav: {
      vikoba: "Vikoba",
      mchezo: "Mchezo",
      howItWorks: "How it works",
      faq: "FAQ",
      help: "Help",
      pricing: "Pricing",
      getApp: "Get the app",
    },
    common: {
      language: "Language",
      themeDark: "Dark",
      themeLight: "Light",
    },
    home: {
      badge: "Vikoba + Mchezo",
      heroTitle: "Run group savings with clarity and confidence.",
      heroSubtitle:
        "Tuno is a mobile app for groups that save together (Vikoba) and rotate contributions (Mchezo). Track who paid, what is due, and who receives next.",
      ctaPrimary: "Get the app",
      ctaSecondary: "See how it works",
      rightImageAlt: "Tuno app",
      rightVikobaTitle: "Vikoba",
      rightMchezoTitle: "Mchezo",
      builtForTitle: "Built for real group routines.",
      builtForSubtitle:
        "Whether your group is saving toward a goal (Vikoba) or rotating a fixed contribution (Mchezo), Tuno keeps the rules visible and the records clean.",
      feature1Title: "Transparent records",
      feature1Desc: "Members see contributions, dates, and status without side chats.",
      feature2Title: "Simple tracking",
      feature2Desc: "Know who paid, who is pending, and totals in seconds.",
      feature3Title: "Rotation clarity",
      feature3Desc: "Recipient order and due dates stay visible at all times.",
      howItWorksTitle: "Simple steps, strong habits.",
      howItWorksSubtitle:
        "Clear rules, clear records, and a process everyone can follow.",
      step1Title: "Create a group",
      step1Desc: "Set rules: amount, schedule, and member roles.",
      step2Title: "Track contributions",
      step2Desc: "Record payments so everyone sees what’s paid and pending.",
      step3Title: "Run Vikoba or Mchezo",
      step3Desc: "Save toward goals or rotate payouts with visible order and dates.",
      faqTitle: "Answers, upfront.",
      faqSubtitle: "Common questions about Vikoba, Mchezo, and how Tuno works.",
      downloadTitle: "Get started with Tuno",
      downloadSubtitle:
        "Add your app store links when ready. For now, capture interest and contact details.",
      googlePlay: "Google Play",
      appStore: "App Store",
    },
    help: {
      title: "Help Center",
      heading: "How can we help?",
      subtitle:
        "Search for answers about Vikoba, Mchezo, contributions, members, and records.",
      searchPlaceholder: "Search topics, features, or issues…",
      topResults: "Top results",
      browseTitle: "Browse by category",
      browseSubtitle: "Find the right topic quickly.",
      popularTitle: "Popular articles",
      popularSubtitle: "Most visited guides from groups using Tuno.",
      guidesTitle: "Guides",
      guidesSubtitle: "Practical steps for how groups use Tuno day-to-day.",
      stillStuckTitle: "Still stuck?",
      stillStuckSubtitle:
        "If you can’t find what you need, contact the Tuno team and we’ll help.",
      emailSupport: "Email support",
      backHome: "Back to home",
    },
    pricing: {
      title: "Pricing",
      subtitle:
        "One subscription package. Vikoba pricing scales with the number of members.",
      planTitle: "Tuno Subscription",
      planSubtitle: "Vikoba + Mchezo for modern groups.",
      subscriptionTag: "Subscription",
      membersLabel: "Number of members",
      membersUnit: "members",
      monthlyLabel: "per month",
      note:
        "Vikoba pricing scales by member count. Mchezo is included in the same subscription.",
      priceIncludes: "Includes",
      includes1: "Vikoba: contributions and summaries",
      includes2: "Mchezo: rotation order and dates",
      includes3: "Support and product updates",
      cta: "Contact for subscription",
      howWorksTitle: "How pricing works",
      howWorksDesc:
        "One subscription package. Vikoba pricing depends on the number of members in the group.",
      upToMembers: "Up to",
      perMonthShort: " / mo",
    },
    footer: {
      tagline: "Savings (Vikoba) and rotation (Mchezo) for modern groups.",
      download: "Download",
      help: "Help Center",
    },
  },
}

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue | null>(null)

function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "sw"
    const stored = window.localStorage.getItem("tuno_locale")
    if (stored === "sw" || stored === "en") return stored
    const browser = navigator.language.toLowerCase()
    if (browser.startsWith("sw")) return "sw"
    return "sw"
  })

  useEffect(() => {
    window.localStorage.setItem("tuno_locale", locale)
  }, [locale])

  useEffect(() => {
    if (typeof document === "undefined") return
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale: setLocaleState,
      t: translations[locale],
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error("useI18n must be used within I18nProvider")
  return value
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  )
}
