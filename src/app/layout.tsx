import type { Metadata } from "next"

import { cn } from "@/lib/utils"

import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"

import { siteConfig } from "@/config/site"

import { SiteFooter } from "./_components/site-footer"
import { SiteHeader } from "./_components/site-header"

const fontSans = GeistSans

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen min-w-80 flex-col bg-background">
            <SiteHeader />
            <main className="container flex-1 items-start py-8">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
