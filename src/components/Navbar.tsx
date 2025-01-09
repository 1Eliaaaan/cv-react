import { FaDownload } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl">
          Elian Hernandez
        </a>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
            <li><a href="#education" className="text-gray-300 hover:text-white">Education</a></li>
            <li><a href="#experience" className="text-gray-300 hover:text-white">Experience</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white">About Me</a></li>
          </ul>
          <a
            href="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/CV.pdf"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300 ease-in-out"
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

