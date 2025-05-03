import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
  role: string;
  metrics?: string;
}

const projects: Project[] = [
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
    role: "Backend Developer",

  },
  {
    title: "Heroes of Cipher Website",
    description: "Heroes of cipher is a website that contains some functions like store and blog this was built on wordpress and deployed on AWS Lightsail.",
    technologies: ["Wordpress", "AWS Lightsail"],
    liveLink: "http://44.212.224.30/",
    githubLink: '',
    image: "https://api.microlink.io/?url=http://44.212.224.30/&screenshot=true&meta=false&embed=screenshot.url",
    role: "DevOps Engineer",

  },  {
    title: "Fit Tracker",
    description: "Track your fitness goals and progress with this app.",
    technologies: ["TypeScript", "React", "Node.js", "Vercel", "Supabase"],
    liveLink: "https://fit-tracker-tawny.vercel.app/",
    githubLink: '',
    image: "https://api.microlink.io/?url=https://fit-tracker-tawny.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    role: "Developer",

  }
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const allTechnologies = ['all', ...new Set(projects.flatMap(p => p.technologies))];

  const filteredProjects = selectedTech === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(selectedTech));

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center text-white">Projects</h2>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTechnologies.map((tech) => (
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
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Project+Preview';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-2">{project.role}</p>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    {project.metrics && (
                      <p className="text-green-400 text-sm mb-4">{project.metrics}</p>
                    )}
                    <div className="mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-colors duration-300"
                        >
                          <FaGithub className="inline mr-2" />
                          Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="inline mr-2" />
                          Demo
                        </a>
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
  );
};

export default Projects;

