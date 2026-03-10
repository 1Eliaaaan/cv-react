import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const Footer = () => {
  return (
    <footer className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Decorative top line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-accent/20 to-transparent mb-16" />

        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold text-txt-primary mb-4">
              Let's <span className="text-amber-accent">work together</span>
            </h2>
            <p className="font-serif text-lg text-txt-muted max-w-lg mx-auto">
              Always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex justify-center gap-4 mb-16">
            <a
              href="mailto:elianhernandezc16@gmail.com"
              className="group flex items-center gap-3 px-7 py-3 rounded-lg bg-amber-accent text-deep font-code font-semibold text-sm transition-all duration-300 hover:shadow-glow-amber"
            >
              <FaEnvelope className="text-sm" />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/elian-hernandez-323828299/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3 rounded-lg border border-border text-txt-primary font-code text-sm transition-all duration-300 hover:border-amber-accent/40 hover:text-amber-accent"
            >
              <FaLinkedin className="text-sm" />
              LinkedIn
            </a>
            <a
              href="https://github.com/1Eliaaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3 rounded-lg border border-border text-txt-primary font-code text-sm transition-all duration-300 hover:border-amber-accent/40 hover:text-amber-accent"
            >
              <FaGithub className="text-sm" />
              GitHub
            </a>
          </div>
        </AnimatedSection>

        {/* Bottom bar */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-code text-xs text-txt-dim">
            © {new Date().getFullYear()} Elian Hernandez
          </p>
          <p className="font-code text-xs text-txt-dim">
            Medellín, Colombia 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
