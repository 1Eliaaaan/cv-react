import { FaServer, FaDatabase, FaCloud, FaCogs, FaSpider, FaLink, FaCode, FaProjectDiagram } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center text-white">About Me</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white">About Me</h3>
              <div className="relative">
                <img 
                  src="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/profile.jpg" 
                  alt="Your professional photo" 
                  className="float-left mr-4 mb-4 rounded-lg w-1/3 md:w-1/2 lg:w-1/3 shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate Backend Developer with two years of experience in web development, specializing in building scalable and efficient solutions. My expertise spans across both Frontend and Backend development, with a strong focus on cloud architecture and database management. I excel in designing and implementing RESTful APIs, microservices architectures, and cloud-based solutions using AWS.

                  What sets me apart is my ability to bridge the gap between technical implementation and business objectives. I am constantly seeking innovative solutions and process optimizations to enhance product efficiency and quality. My experience in database management and scalable service architecture allows me to tackle complex challenges with creative and effective solutions.

                  I am particularly interested in emerging technologies like Web3 and Blockchain, and I am always eager to learn and adapt to new technologies and methodologies. My goal is to continue growing as a developer while contributing to meaningful projects that make a real impact.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <FaServer className="text-green-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Backend Development & API Design</span>
                </li>
                <li className="flex items-center group">
                  <FaDatabase className="text-green-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Database Design & Optimization</span>
                </li>
                <li className="flex items-center group">
                  <FaCloud className="text-green-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Cloud Architecture & DevOps</span>
                </li>
                <li className="flex items-center group">
                  <FaCogs className="text-green-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">CI/CD & Automation</span>
                </li>
                <li className="flex items-center group">
                  <FaSpider className="text-green-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Web Scraping & Data Extraction</span>
                </li>
                <li className="flex items-center group">
                  <FaLink className="text-green-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Web 3 & Blockchain Development</span>
                </li>
                <li className="flex items-center group">
                  <FaCode className="text-green-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Clean Code & Best Practices</span>
                </li>
                <li className="flex items-center group">
                  <FaProjectDiagram className="text-green-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">System Architecture & Design</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About

