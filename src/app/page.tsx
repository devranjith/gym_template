import { Contact } from '@/components/sections/Contact'
import { Features } from '@/components/sections/Features'
import { Footer } from '@/components/sections/Footer'
import { Gallery } from '@/components/sections/Gallery'
import { Hero } from '@/components/sections/Hero'
import { Navbar } from '@/components/sections/Navbar'
import { Pricing } from '@/components/sections/Pricing'
import { Trainers } from '@/components/sections/Trainers'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-black text-text">
      <Navbar />
      <Hero />
      <Features />
      <Trainers />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
