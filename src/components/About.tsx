import { FaServer, FaDatabase, FaCloud, FaCogs } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">I'm</h3>
              <div className="relative">
                <img 
                  src="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/profile.jpg" 
                  alt="Your professional photo" 
                  className="float-left mr-4 mb-4 rounded-lg w-1/3 md:w-1/2 lg:w-1/3"
                />
                <p className="text-gray-300">
                  deeply curious person with a passion for technology, possessing a solid track record of two years in the web development sector. My experience spans a wide range of technical areas, allowing me to have a comprehensive view of the development process. I have worked in both Frontend and Backend development, and I have experience in the implementation and management of cloud solutions. Additionally, I have advanced knowledge in database management and the design of scalable service architectures. My focus is on the constant search for innovative solutions and process optimization to improve the efficiency and quality of the developed products. This combination of curiosity and experience enables me to tackle complex challenges and find effective and creative solutions in the field of web development.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaServer className="text-green-500 mr-2" />
                  <span>Development of RESTful APIs</span>
                </li>
                <li className="flex items-center">
                  <FaDatabase className="text-green-500 mr-2" />
                  <span>Cloud Services</span>
                </li>
                <li className="flex items-center">
                  <FaCloud className="text-green-500 mr-2" />
                  <span>Microservices architecture</span>
                </li>
                <li className="flex items-center">
                  <FaCogs className="text-green-500 mr-2" />
                  <span>Continuous Integration and Deployment (CI/CD)</span>
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

