import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Theodore Aware | AI Researcher and Data Scientist",
  description:
    "Modern professional website for Theodore Aware, AI researcher, data scientist, statistician, and public-sector analytics leader.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-paper text-ink">{children}</body>
    </html>
  )
}
