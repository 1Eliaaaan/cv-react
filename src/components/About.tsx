import { FaServer, FaDatabase, FaCloud, FaCogs, FaSpider, FaLink, FaCode, FaProjectDiagram } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-dark shadow-sm shadow-gray-700 rounded-lg">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center text-white">About Me</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-gray-700 transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white">About Me</h3>
              <div className="relative">
                <img 
                  src="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/profile.jpg" 
                  alt="Your professional photo" 
                  className="float-left mr-4 mb-4 rounded-lg w-1/4 md:w-1/2 lg:w-1/4 shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <p className="text-gray-300 leading-relaxed">
                 I am a full-stack developer with three years of experience in web development, focused on developing scalable and efficient applications. I specialize in backend development, but I also work on frontend development, which helps me understand projects from a comprehensive perspective. I am passionate about cloud architectures, databases, and the creation and integration of reliable APIs and microservices. I tend to find practical solutions that connect technical work with business objectives, and I always find ways to improve products and make them more efficient. I am also interested in exploring new technologies such as Web3 and Blockchain, and I am constantly learning new things to continue improving as a developer.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">

</div>
            <div className=" rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-gray-700 transition-shadow duration-300">
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

