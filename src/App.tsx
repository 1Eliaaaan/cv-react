import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollToTop />
        <main className="space-y-20">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
        </main>
      </div>
    </div>
  )
}

export default App

