import AnimatedSection from './AnimatedSection'
import {
  SiNodedotjs, SiTypescript, SiReact, SiExpress,
  SiMongodb, SiMysql, SiDocker, SiAmazonwebservices,
  SiGit, SiFirebase, SiSupabase, SiVercel
} from 'react-icons/si'

interface TechItem {
  icon: React.ComponentType<{ size?: number; className?: string }>
  name: string
}

interface TechCategory {
  label: string
  items: TechItem[]
}

const categories: TechCategory[] = [
  {
    label: 'Backend',
    items: [
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express' },
      { icon: SiTypescript, name: 'TypeScript' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { icon: SiReact, name: 'React' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiFirebase, name: 'Firebase' },
      { icon: SiSupabase, name: 'Supabase' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { icon: SiAmazonwebservices, name: 'AWS' },
      { icon: SiDocker, name: 'Docker' },
      { icon: SiVercel, name: 'Vercel' },
      { icon: SiGit, name: 'Git' },
    ],
  },
]

const TechStack = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title">Tech Stack</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIndex) => (
            <AnimatedSection key={cat.label} variant="fadeUp" delay={catIndex * 0.1}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-amber-accent" />
                  <h3 className="font-code text-xs text-amber-accent uppercase tracking-wider">{cat.label}</h3>
                </div>
                <div className="space-y-4">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/[0.03]"
                    >
                      <tech.icon
                        size={20}
                        className="text-txt-muted transition-all duration-300 group-hover:text-amber-accent group-hover:drop-shadow-[0_0_6px_rgba(245,166,35,0.3)]"
                      />
                      <span className="font-code text-sm text-txt-muted group-hover:text-txt-primary transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
