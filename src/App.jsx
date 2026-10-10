import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aurora from './components/Aurora'
import Marquee from './components/Marquee'
import Metrics from './components/Metrics'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-white antialiased">
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Metrics />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
    </div>
  )
}
