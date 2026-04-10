import type { Metadata } from "next"
import type { ReactNode } from "react"

import tLetterLogo from "@/assets/icons/t_letter_logo.png"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: {
    default: "Tuno",
    template: "%s · Tuno",
  },
  description:
    "Tuno helps groups manage savings (Vikoba) and rotation (Mchezo) with clarity, transparency, and simple tracking.",
  applicationName: "Tuno",
  metadataBase: new URL("https://tuno.app"),
  openGraph: {
    title: "Tuno",
    description:
      "A modern way for groups to handle savings (Vikoba) and group rotation (Mchezo).",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuno",
    description:
      "A modern way for groups to handle savings (Vikoba) and group rotation (Mchezo).",
  },
  icons: {
    icon: [{ url: tLetterLogo.src }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
