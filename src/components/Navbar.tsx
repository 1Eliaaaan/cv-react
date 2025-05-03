import { FaDownload } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="bg-gray-800/95 backdrop-blur-sm p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl hover:text-green-500 transition-colors duration-300">
          Elian Hernandez
        </a>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#projects" 
                className={`text-gray-300 hover:text-white transition-colors duration-300 relative group ${
                  activeSection === 'projects' ? 'text-green-500' : ''
                }`}
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className={`text-gray-300 hover:text-white transition-colors duration-300 relative group ${
                  activeSection === 'education' ? 'text-green-500' : ''
                }`}
              >
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`text-gray-300 hover:text-white transition-colors duration-300 relative group ${
                  activeSection === 'experience' ? 'text-green-500' : ''
                }`}
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`text-gray-300 hover:text-white transition-colors duration-300 relative group ${
                  activeSection === 'about' ? 'text-green-500' : ''
                }`}
              >
                About Me
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
          <a
            href="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/CV.pdf"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <FaDownload className="mr-2" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

