import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import PlausibleProvider from "@/components/PlausibleProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: "%s — TechTribe Africa",
    default: "TechTribe Africa — Technology intelligence from the continent",
  },
  description:
    "The shifts nobody told you about. The markets being quietly built. The ideas worth understanding before they're obvious.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://techtribeafrica.com"),
  openGraph: {
    siteName: "TechTribe Africa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TechTribeAfrica",
  },
  robots: { index: true, follow: true },
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;450;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PlausibleProvider />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
