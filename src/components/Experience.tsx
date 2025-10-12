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
    company: "Master.la",
    period: "2022 - 2024",
    responsibilities: [
      "Design and development of scalable APIs",
      "Implementation of microservices architectures",
      "Database query optimization and performance improvement",
      "WebScraping",
      "Extenal APIs Integrations",
    ]
  }]

const Experience = () => {
  return (
    <section id="experience" className="py-20 shadow-sm shadow-gray-700">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        </AnimatedSection>
        <div className="space-y-8">
           <ol className="relative border-s border-gray-200 dark:border-gray-700"> 
          {experiences.map((exp, index) => (
            <AnimatedSection key={index}>
                         
<li className="mb-10 ms-4 relative">
  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
    {`${exp.period} - ${exp.company}`}
  </time>

  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
    {exp.position}
  </h3>

  <h2 className="mb-2 text-primary-light">Responsibilities</h2>

  <ul className="flex flex-wrap gap-3 list-disc list-inside marker:text-primary-light">
    {exp.responsibilities.map((resp, i) => (
      <li
        key={i}
        className="text-base font-normal text-gray-500 dark:text-gray-400"
      >
        {resp}
      </li>
    ))}
  </ul>
</li>


  

            </AnimatedSection>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Experience

