import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VerticalNav from './components/VericalNav';

import './App.css';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-deep text-txt-primary overflow-hidden">
      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40" />

      {/* Main content */}
      <div className="relative z-10">
        <VerticalNav />
        <ScrollToTop />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <main>
            <Hero />

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <About />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <TechStack />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <Experience />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <Education />

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <Projects />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
