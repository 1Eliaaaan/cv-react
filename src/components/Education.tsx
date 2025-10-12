import AnimatedSection from './AnimatedSection'

interface Education {
  degree: string
  institution: string
  year: string
  description: string
  url : string
}

const educations: Education[] = [
  {
    degree: "Technical Programming of applications and services in the cloud",
    institution: "SENA",
    year: "2022",
    description: "",
    url : "https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/9204002396659CC1193391865C.pdf"
  },
  {
    degree: "View Legacy JavaScript Algorithms and Data Structures Certification",
    institution: "FreeCodeCamp",
    year: "2024",
    description: "",
    url : "https://www.freecodecamp.org/certification/eliand/javascript-algorithms-and-data-structures"
  },
  {
    degree: "Backend Development and APIs",
    institution: "FreeCodeCamp",
    year: "2024",
    description: "",
    url : "https://www.freecodecamp.org/certification/eliand/back-end-development-and-apis"
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 shadow-sm shadow-gray-700 rounded-lg">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>
        </AnimatedSection>
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <AnimatedSection key={index}>
               <div
    className="relative  rounded-2xl p-8  shadow-sm shadow-gray-700 hover:shadow-xl hover:shadow-gray-700"
  >


    <div className="relative">
      <div
        className="absolute -top-12 left-0 px-6 py-2 bg-primary-light rounded-full text-sm text-white"
      >
        {edu.year}
      </div>

      <h2 className="text-xl font-bold mb-2 text-white">{edu.degree}</h2>
      <h3
        className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-primary-light"
      >
        {edu.institution}
      </h3>
   

  

      <div className="flex-row md:flex-col space-y-3 gap-10">


        <a
          href={edu.url}
          target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:border-primary-light transition-colors text-white"
        >
          Certificate
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:rotate-12 transition-transform duration-300"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline
              points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
            ></polyline>
          </svg>
        </a>
      </div>
    </div>
  </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

