import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-dvh bg-background font-sans text-foreground antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
