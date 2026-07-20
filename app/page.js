import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
    </main>
  )
}