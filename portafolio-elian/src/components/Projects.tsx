import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  liveLink?: string
}

const projects: Project[] = [
  {
    title: "Chat App",
    description: "A Chat application, with authentication system and functional message sending.",
    technologies: ["TypeScript", "React", "Firebase", "Vercel"],
    githubLink: "https://github.com/1Eliaaaan/react-chat-app",
    liveLink: "https://chat-app-five-gilt.vercel.app"
  },
  {
    title: "Fitsum App",
    description: "A fitness application helps people create their fitness routines and recipes with the help of artificial intelligence.",
    technologies: ["Node.js", "TypeScript", "React", "MySQL", "S3", "CloudFront", "Lambdas", "OpenAI", "Vercel", "API Gateway"],
    githubLink: "https://github.com/1Eliaaaan/fitsum-app",
    liveLink: "https://fitsum-app.vercel.app"
  },
  {
    title: "Heroes of Cipher Website",
    description: "Heroes of cipher is a website that contains some functions like store and blog this was built on wordpress and deployed on AWS Lightsail.",
    technologies: ["Wordpress", "AWS Lightsail"],
    liveLink: "http://184.73.8.137/",
    githubLink: ''
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                      <FaGithub className="inline mr-2" />
                      Code
                    </a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                        <FaExternalLinkAlt className="inline mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

