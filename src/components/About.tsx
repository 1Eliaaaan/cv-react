import { FaServer, FaDatabase, FaCloud, FaCogs, FaSpider, FaLink, FaCode, FaProjectDiagram } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const skills = [
  { icon: FaServer, label: 'Backend & API Design', desc: 'REST, GraphQL, microservices' },
  { icon: FaDatabase, label: 'Database Engineering', desc: 'MySQL, MongoDB, optimization' },
  { icon: FaCloud, label: 'Cloud Architecture', desc: 'AWS, S3, Lambda, CloudFront' },
  { icon: FaCogs, label: 'CI/CD & Automation', desc: 'Docker, pipelines, IaC' },
  { icon: FaSpider, label: 'Web Scraping', desc: 'Data extraction at scale' },
  { icon: FaLink, label: 'Web3 & Blockchain', desc: 'Smart contracts, DeFi' },
  { icon: FaCode, label: 'Clean Code', desc: 'SOLID, patterns, testing' },
  { icon: FaProjectDiagram, label: 'System Design', desc: 'Architecture, scalability' },
]

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title">About Me</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Bio — takes 3 columns */}
          <AnimatedSection variant="slideLeft" className="lg:col-span-3">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="accent-line" />
                <span className="font-code text-xs text-amber-accent tracking-wider uppercase">Who I am</span>
              </div>
              <p className="font-serif text-lg text-txt-primary/80 leading-relaxed mb-6">
                Full-stack developer with <span className="text-amber-accent font-semibold">three years</span> of experience crafting scalable web applications. I specialize in backend architecture — designing APIs, optimizing databases, and building reliable cloud infrastructure.
              </p>
              <p className="font-serif text-base text-txt-muted leading-relaxed">
                I approach every project from a comprehensive perspective, connecting technical implementation with business objectives. Currently exploring Web3 and blockchain technologies while constantly pushing my boundaries as a developer.
              </p>
            </div>
          </AnimatedSection>

          {/* Quick stats — takes 2 columns */}
          <AnimatedSection variant="slideRight" delay={0.2} className="lg:col-span-2">
            <div className="glass-card p-8 h-full flex flex-col justify-center">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="font-mono text-4xl font-bold text-amber-accent mb-1">3+</div>
                  <div className="font-code text-xs text-txt-muted uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="text-center">
                  <div className="font-mono text-4xl font-bold text-cyan-accent mb-1">9+</div>
                  <div className="font-code text-xs text-txt-muted uppercase tracking-wider">Projects Shipped</div>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="text-center">
                  <div className="font-mono text-4xl font-bold text-amber-accent mb-1">∞</div>
                  <div className="font-code text-xs text-txt-muted uppercase tracking-wider">Lines of Code</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Skills grid */}
        <div className="mt-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="accent-line" />
              <span className="font-code text-xs text-amber-accent tracking-wider uppercase">Core Skills</span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.label} variant="scale" delay={i * 0.08}>
                <div className="glass-card group p-5 cursor-default">
                  <skill.icon className="text-2xl text-amber-accent mb-3 transition-all duration-300 group-hover:text-cyan-accent group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]" />
                  <h4 className="font-code text-sm font-semibold text-txt-primary mb-1">{skill.label}</h4>
                  <p className="font-serif text-xs text-txt-muted">{skill.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
