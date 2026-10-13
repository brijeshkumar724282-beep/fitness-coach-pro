import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Programs from './components/Programs.jsx'
import Schedule from './components/Schedule.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-bone">
      <a
        href="#programs"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-volt focus:px-4 focus:py-2 focus:font-bold focus:text-voltink"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Schedule />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
