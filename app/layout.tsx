import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Theodore Aware | AI Researcher and Data Scientist",
  description:
    "Theodore Aware — AI researcher, data scientist, and applied statistician building reliable systems for navigation, public planning, finance, and community-centred decision making.",
  metadataBase: new URL("https://theo-images-ab8i.vercel.app"),
  openGraph: {
    title: "Theodore Aware | AI Researcher and Data Scientist",
    description:
      "Theodore Aware — AI researcher, data scientist, and applied statistician building reliable systems for navigation, public planning, finance, and community-centred decision making.",
    url: "https://theo-images-ab8i.vercel.app",
    siteName: "Theodore Aware",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Theodore Aware — AI Research · Data Science · Public Impact" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theodore Aware | AI Researcher and Data Scientist",
    description:
      "Theodore Aware — AI researcher, data scientist, and applied statistician building reliable systems for navigation, public planning, and finance.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-paper text-ink">{children}</body>
    </html>
  )
}
