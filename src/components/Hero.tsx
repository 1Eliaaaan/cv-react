import { motion } from 'framer-motion'
import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { RiTerminalBoxLine } from 'react-icons/ri'

const Hero = () => {
  return (
    <div className="flex items-center justify-center p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 pointer-events-none" />
          <div className="p-8 sm:p-12 relative">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8">
              <div className="flex flex-col items-center md:items-start">
                <motion.div
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <RiTerminalBoxLine className="text-6xl text-green-500" />
                </motion.div>
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500">
                  <img
                    src="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/profile.jpg"
                    alt="Elian Hernandez"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/150';
                    }}
                  />
                </div>
              </div>
              <div className="flex space-x-6">
                <SocialLink href="https://www.linkedin.com/in/elian-hernandez-323828299/" icon={<FaLinkedin />} label="LinkedIn" />
                <SocialLink href="https://github.com/1Eliaaaan" icon={<FaGithub />} label="GitHub" />
                <SocialLink href="mailto:elianhernandezc16@gmail.com" icon={<FaEnvelope />} label="Email" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-4"
              >
                Backend Developer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl text-gray-300 mb-6"
              >
                Building the digital future from Medellin, Colombia
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gray-700 dark:bg-gray-800 rounded-lg p-6 mb-8"
            >
              <code className="text-sm sm:text-base text-green-400 font-mono">
                const technologies = ['Node.js', 'Express', 'React', 'TypeScript', 'AWS', 'MySQL', 'MongoDB', 'Docker', 'Git', 'REST APIs'];
                <br />
                const location = 'Medellín, Colombia';
                <br />
                const passion = 'Create scalable and efficient solutions';
              </code>
            </motion.div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                See Projects
              </motion.button>
 
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-gray-700 dark:bg-gray-800 p-3 rounded-full hover:bg-green-500">
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
    </motion.a>
  )
}

export default Hero

