import AnimatedSection from './AnimatedSection'
import { FaAward, FaCertificate } from 'react-icons/fa'

interface EducationItem {
  degree: string
  institution: string
  year: string
  type: 'technical' | 'certification'
  url: string
}

const educations: EducationItem[] = [
  {
    degree: "Technical Programming — Cloud Applications & Services",
    institution: "SENA",
    year: "2022",
    type: 'technical',
    url: "https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/9204002396659CC1193391865C.pdf"
  },
  {
    degree: "JavaScript Algorithms & Data Structures",
    institution: "FreeCodeCamp",
    year: "2024",
    type: 'certification',
    url: "https://www.freecodecamp.org/certification/eliand/javascript-algorithms-and-data-structures"
  },
  {
    degree: "Backend Development & APIs",
    institution: "FreeCodeCamp",
    year: "2024",
    type: 'certification',
    url: "https://www.freecodecamp.org/certification/eliand/back-end-development-and-apis"
  }
]

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title">Education</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educations.map((edu, index) => (
            <AnimatedSection key={index} variant="fadeUp" delay={index * 0.12}>
              <div className="glass-card group p-6 h-full flex flex-col relative overflow-hidden">
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Year badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-code text-xs text-deep bg-amber-accent px-3 py-1 rounded-md font-semibold">
                    {edu.year}
                  </span>
                  {edu.type === 'technical' ? (
                    <FaAward className="text-amber-accent text-lg" />
                  ) : (
                    <FaCertificate className="text-cyan-accent text-lg" />
                  )}
                </div>

                {/* Content */}
                <h3 className="font-mono text-base font-semibold text-txt-primary mb-2 leading-snug flex-1">
                  {edu.degree}
                </h3>
                <p className="font-serif text-sm text-amber-accent/80 mb-5">{edu.institution}</p>

                {/* Certificate link */}
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-code text-xs text-txt-muted border border-border rounded-lg px-4 py-2.5 transition-all duration-300 hover:border-amber-accent/40 hover:text-amber-accent hover:shadow-glow-amber self-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:rotate-12 transition-transform duration-300"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  View Certificate
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
