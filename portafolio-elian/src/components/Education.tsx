import AnimatedSection from './AnimatedSection'

interface Education {
  degree: string
  institution: string
  year: string
  description: string
}

const educations: Education[] = [
  {
    degree: "Technical Programming of applications and services in the cloud",
    institution: "SENA",
    year: "2022",
    description: ""
  },
  {
    degree: "View Legacy JavaScript Algorithms and Data Structures Certification",
    institution: "FreeCodeCamp",
    year: "2024",
    description: ""
  },
  {
    degree: "Backend Development and APIs",
    institution: "FreeCodeCamp",
    year: "2024",
    description: ""
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>
        </AnimatedSection>
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <AnimatedSection key={index}>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-green-400">{edu.institution} | {edu.year}</p>
                <p className="text-gray-300 mt-2">{edu.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

