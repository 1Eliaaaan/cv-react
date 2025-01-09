import AnimatedSection from './AnimatedSection'

interface Experience {
  position: string
  company: string
  period: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    position: "Backend Web Developer",
    company: "Master",
    period: "2022 - 2024",
    responsibilities: [
      "Design and development of scalable APIs",
      "Implementation of microservices architectures",
      "Database query optimization and performance improvement",
    ]
  }]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        </AnimatedSection>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index}>
              <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                <p className="text-green-400 mb-2">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside text-gray-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

