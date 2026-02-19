import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

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
    description: "A Chat application, with authentication system and functional message sending.",
    technologies: ["TypeScript", "React", "Firebase", "Vercel"],
    githubLink: "https://github.com/1Eliaaaan/react-chat-app",
    liveLink: "https://chat-app-five-gilt.vercel.app",
    image: "https://api.microlink.io/?url=https://chat-app-five-gilt.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "Fitsum App",
    description: "A fitness application helps people create their fitness routines and recipes with the help of artificial intelligence.",
    technologies: ["Node.js", "TypeScript", "React", "MySQL", "S3", "CloudFront", "Lambdas", "OpenAI", "Vercel", "API Gateway"],
    githubLink: "https://github.com/1Eliaaaan/fitsum-app",
    liveLink: "https://fitsum-app.vercel.app",
    image: "https://api.microlink.io/?url=https://fitsum-app.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  // {
  //   title: "Clothing Ecommerce",
  //   description: "Eccomerce website for a clothing brand. Using Gutember editor for page building. WooCommerce for the store. Deployed on railway.app.",
  //   technologies: ["Wordpress", "Railway", "WooCommerce", "PHP", "MySQL", "Elementor", "CSS"],
  //   liveLink: "https://primary-production-11d2d.up.railway.app/",
  //   githubLink: '',
  //   image: "https://api.microlink.io/?url=https://primary-production-11d2d.up.railway.app/&screenshot=true&meta=false&embed=screenshot.url",
  //   role: "Full Stack Developer",
  // },
  {
    title: "Fit Tracker",
    description: "Track your fitness goals and progress with this app.",
    technologies: ["TypeScript", "React", "Node.js", "Vercel", "Supabase"],
    liveLink: "https://fit-tracker-tawny.vercel.app/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://fit-tracker-tawny.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
  {
    title: "RugFI",
    description: "Trade, swap, and snipe ERC-20 tokens on the blockchain — manage your portfolio from one powerful platform.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "Vercel", "MongoDB", "Web3"],
    liveLink: "https://rugfi-ft.vercel.app/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://rugfi-ft.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
    {
    title: "Koroshi Programmer",
    description: "Auto Traing, Fight, Levelup NFTs Scheduler",
    technologies: ["TypeScript", "React", "Lambda", "AWS", "Event Bridge", "Web3"],
    liveLink: "https://koroshi-programmer.vercel.app/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://koroshi-programmer.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
      {
    title: "Arcana Esscence",
    description: "Fragances Online Shop",
    technologies: ["TypeScript", "React", "Supabase", "Auth", "SQL"],
    liveLink: "https://www.arcanaessence.store/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://www.arcanaessence.store/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
]
const laboralProjects : Project[]= [
  {
    title: "MasterTools",
    description: "A Ecommerce Tools Swite",
    technologies: ["TypeScript", "React", "AWS Step Functions", "WebScraping", "Javascript","AWS Lambda"],
    githubLink: "",
    liveLink: "https://mastertools.com/",
    image: "https://api.microlink.io/?url=https://mastertools.com/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },
    {
    title: "MasterShop",
    description: "A DropShipping Platform",
    technologies: ["TypeScript", "React", "Event Bridge", "Node Js", "Javascript", "SOAP", "XML", "AWS Lambda"],
    githubLink: "",
    liveLink: "https://mastershop.com/",
    image: "https://api.microlink.io/?url=https://mastershop.com/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Full Stack Developer",
  },   {
    title: "Chat App",
    description: "A Whatsapp Chat App With Meta API",
    technologies: ["TypeScript", "React", "Dynamo DB", "Node Js", "Javascript", "AWS Lambda"],
    githubLink: "",
    liveLink: "",
    image: "",
    role: "Full Stack Developer",
  }
]

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string>('all')
  const allTechnologiesPersonal = ['all', ...new Set(personalProjects.flatMap(p => p.technologies))]
   const allTechnologiesWork = ['all', ...new Set(laboralProjects.flatMap(p => p.technologies))]
  const filteredProjectsPersonal = selectedTech === 'all' ? personalProjects : personalProjects.filter(personalProjects => personalProjects.technologies.includes(selectedTech))
  const filteredProjectsWork = selectedTech === 'all' ? laboralProjects : laboralProjects.filter(laboralProjects => laboralProjects.technologies.includes(selectedTech))

  return (
    <section id="projects" className="py-20 shadow-sm shadow-gray-700 hover:shadow-xl hover:shadow-gray-700">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center text-white">Personal Projects</h2>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTechnologiesPersonal.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedTech === tech
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjectsPersonal.map((personalProjects, index) => (
              <motion.div
                key={personalProjects.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.28, delay: index * 0.06 }}
              >
                <div 
                onClick={() => window.open(personalProjects.liveLink, '_blank')}
                className="cursor-pointer rounded-lg shadow-lg shadow-gray-700 hover:shadow-xl hover:shadow-white overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative h-50 overflow-hidden">
                    <img
                      src={personalProjects.image}
                      alt={personalProjects.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://via.placeholder.com/400x300?text=Project+Preview'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-2">
                    <h3 className="text-lg font-semibold mb-1 text-white">{personalProjects.title}</h3>
                    <p className="text-gray-300 mb-3">{personalProjects.role}</p>
                    <p className="text-gray-300 mb-3">{personalProjects.description}</p>
                    {personalProjects.metrics && (
                      <p className="text-green-400 text-sm mb-3">{personalProjects.metrics}</p>
                    )}

                    <div className="mb-4 flex flex-wrap gap-2">
                      {personalProjects.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
          <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center text-white">Work Projects</h2>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTechnologiesWork.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedTech === tech
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjectsWork.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.28, delay: index * 0.06 }}
              >
                <div 
                onClick={() => window.open(project.liveLink, '_blank')}
                className="cursor-pointer rounded-lg shadow-lg shadow-gray-700 hover:shadow-xl hover:shadow-white overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative h-50 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://via.placeholder.com/400x300?text=Project+Preview'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-2">
                    <h3 className="text-lg font-semibold mb-1 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-3">{project.role}</p>
                    <p className="text-gray-300 mb-3">{project.description}</p>
                    {project.metrics && (
                      <p className="text-green-400 text-sm mb-3">{project.metrics}</p>
                    )}

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
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
