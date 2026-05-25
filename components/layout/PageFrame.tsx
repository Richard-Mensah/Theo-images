import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

type Props = {
  children: React.ReactNode
}

export default function PageFrame({ children }: Props) {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
