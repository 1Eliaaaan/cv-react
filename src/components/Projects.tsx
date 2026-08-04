import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  liveLink?: string
  image: string
  role: string
  metrics?: string
}

const personalProjects: Project[] = [
  {
    title: "Chat App",
    description: "Real-time chat application with full authentication and functional messaging system.",
    technologies: ["TypeScript", "React", "Firebase", "Vercel"],
    githubLink: "https://github.com/1Eliaaaan/react-chat-app",
    liveLink: "https://chat-app-five-gilt.vercel.app",
    image: "https://api.microlink.io/?url=https://chat-app-five-gilt.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
    {
    title: "MyIGN",
    description: "Gaming profile app with user authentication, game library, and social features.",
    technologies: ["TypeScript", "React", "Next.js", "Vercel", "Supabase", "Auth", "SQL", "Cloudfare R2"],
    githubLink: "",
    liveLink: "https://myign.space",
    image: "https://api.microlink.io/?url=https://myign.space&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "Fitsum App",
    description: "AI-powered fitness app for creating personalized workout routines and recipes using OpenAI.",
    technologies: ["Node.js", "TypeScript", "React", "MySQL", "S3", "CloudFront", "Lambda", "OpenAI"],
    githubLink: "https://github.com/1Eliaaaan/fitsum-app",
    liveLink: "https://fitsum-app.vercel.app",
    image: "https://api.microlink.io/?url=https://fitsum-app.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "Fit Tracker",
    description: "Track your fitness goals, progress, and workout history with intuitive dashboards.",
    technologies: ["TypeScript", "React", "Node.js", "Vercel", "Supabase"],
    liveLink: "https://fit-tracker-tawny.vercel.app/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://fit-tracker-tawny.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "RugFI",
    description: "Trade, swap, and snipe ERC-20 tokens on the blockchain from one powerful platform.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Web3"],
    liveLink: "https://rugfi-ft.vercel.app/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://rugfi-ft.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "Koroshi Programmer",
    description: "Automated NFT scheduler for training, fighting, and leveling up digital assets.",
    technologies: ["TypeScript", "React", "Lambda", "AWS", "EventBridge", "Web3"],
    liveLink: "https://koroshi-programmer.vercel.app/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://koroshi-programmer.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "Arcana Essence",
    description: "Premium online fragrance shop with auth, catalog, and shopping cart.",
    technologies: ["TypeScript", "React", "Supabase", "Auth", "SQL"],
    liveLink: "https://www.arcanaessence.store/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://www.arcanaessence.store/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
    {
    title: "The Jaded Group",
    description: "Premium landing page",
    technologies: ["GOHighLevel", "CRM"],
    liveLink: "https://link.kiscrm.com/preview/LE3Ug2PgTOlzpC5SThoT",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://link.kiscrm.com/preview/LE3Ug2PgTOlzpC5SThoT&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
]

const laboralProjects: Project[] = [
  {
    title: "MasterTools",
    description: "E-commerce tools suite with scraping automation and AWS orchestration.",
    technologies: ["TypeScript", "React", "AWS Step Functions", "WebScraping", "Lambda"],
    githubLink: "",
    liveLink: "https://mastertools.com/",
    image: "https://api.microlink.io/?url=https://mastertools.com/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "MasterShop",
    description: "Dropshipping platform with SOAP integrations and event-driven architecture.",
    technologies: ["TypeScript", "React", "EventBridge", "Node.js", "SOAP", "XML", "Lambda"],
    githubLink: "",
    liveLink: "https://mastershop.com/",
    image: "https://api.microlink.io/?url=https://mastershop.com/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "WhatsApp Chat App",
    description: "Internal chat application built with Meta WhatsApp Business API.",
    technologies: ["TypeScript", "React", "DynamoDB", "Node.js", "Lambda"],
    githubLink: "",
    liveLink: "",
    image: "",
    role: "Full Stack Developer",
  }
]

type Tab = 'personal' | 'work'

const Projects = () => {
  const [activeTab, setActiveTab] = useState<Tab>('personal')
  const projects = activeTab === 'personal' ? personalProjects : laboralProjects

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title">Projects</h2>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex gap-1 p-1 mb-12 bg-card rounded-lg border border-border w-fit">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-5 py-2.5 rounded-md font-code text-sm transition-all duration-300 ${
                activeTab === 'personal'
                  ? 'bg-amber-accent text-deep font-semibold shadow-glow-amber'
                  : 'text-txt-muted hover:text-txt-primary'
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`px-5 py-2.5 rounded-md font-code text-sm transition-all duration-300 ${
                activeTab === 'work'
                  ? 'bg-amber-accent text-deep font-semibold shadow-glow-amber'
                  : 'text-txt-muted hover:text-txt-primary'
              }`}
            >
              Work
            </button>
          </div>
        </AnimatedSection>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                key={`${activeTab}-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
              >
                <div className="glass-card group overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  {project.image && (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                      {/* Hover overlay with links */}
                      <div className="absolute inset-0 bg-deep/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-amber-accent flex items-center justify-center text-deep transition-transform duration-200 hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt size={14} />
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-txt-primary transition-transform duration-200 hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-mono text-base font-semibold text-txt-primary">{project.title}</h3>
                    </div>
                    <p className="font-serif text-sm text-txt-muted mb-4 flex-1 leading-relaxed">{project.description}</p>
                    
                    {project.metrics && (
                      <p className="font-code text-xs text-cyan-accent mb-3">{project.metrics}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="tech-tag !text-txt-muted !border-border">+{project.technologies.length - 5}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects
