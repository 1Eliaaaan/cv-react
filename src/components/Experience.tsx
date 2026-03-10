import AnimatedSection from './AnimatedSection'

interface ExperienceItem {
  position: string
  company: string
  period: string
  type: string
  responsibilities: string[]
}

const experiences: ExperienceItem[] = [
  {
    position: "Backend Web Developer",
    company: "Master.la",
    period: "2022 — 2024",
    type: "Full-time",
    responsibilities: [
      "Designed and developed scalable RESTful APIs serving thousands of requests",
      "Implemented microservices architecture for better system modularity",
      "Optimized database queries improving response times significantly",
      "Built web scraping solutions for automated data extraction",
      "Integrated external APIs and third-party services",
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title">Experience</h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical glowing line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-amber-accent/40 via-border to-transparent" />

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} variant="slideLeft" delay={0.1}>
              <div className="relative pl-12 pb-12">
                {/* Timeline dot */}
                <div className="absolute left-3 top-2">
                  <div className="glow-dot" />
                </div>

                <div className="glass-card p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h3 className="font-mono text-xl font-bold text-txt-primary">{exp.position}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="font-serif text-amber-accent font-medium">{exp.company}</span>
                        <span className="text-txt-dim">·</span>
                        <span className="font-code text-xs text-txt-muted">{exp.type}</span>
                      </div>
                    </div>
                    <span className="font-code text-xs text-txt-muted bg-card px-3 py-1.5 rounded-md border border-border self-start">
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-accent/40 mt-2 flex-shrink-0 group-hover:bg-amber-accent transition-colors duration-300" />
                        <span className="font-serif text-txt-muted group-hover:text-txt-primary transition-colors duration-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
