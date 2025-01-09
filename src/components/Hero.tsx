import { motion } from 'framer-motion'
import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { RiTerminalBoxLine } from 'react-icons/ri'

const Hero = () => {
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="p-8 sm:p-12">
            <div className="flex items-center justify-between mb-8">
              <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <RiTerminalBoxLine className="text-5xl text-green-500" />
              </motion.div>
              <div className="flex space-x-6 mb-8">
                <SocialLink href="https://www.linkedin.com/in/elian-hernandez-323828299/" icon={<FaLinkedin />} label="LinkedIn" />
                <SocialLink href="https://github.com/1Eliaaaan" icon={<FaGithub />} label="GitHub" />
                <SocialLink href="mailto:elianhernandezc16@gmail.com" icon={<FaEnvelope />} label="Email" />
              </div>
            </div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gray-700 rounded-lg p-6 mb-8"
            >
              <code className="text-sm sm:text-base text-green-400 font-mono">
                const skills = ['Node.js', 'Express', 'AWS', 'SQL', 'API Design', 'Microservices','React'];
                <br />
                const location = 'Medellín, Colombia';
                <br />
                const passion = 'Create scalable and efficient solutions';
              </code>
            </motion.div>
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
      <div className="bg-gray-700 p-3 rounded-full hover:bg-green-500">
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
    </motion.a>
  )
}

export default Hero

