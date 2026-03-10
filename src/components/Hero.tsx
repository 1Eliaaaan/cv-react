import { motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'

const useTypingEffect = (text: string, speed: number = 40) => {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    setDone(false)
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return { displayed, done }
}

const Hero = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const gradientX = useTransform(mouseX, [0, window.innerWidth], [0, 100])
  const gradientY = useTransform(mouseY, [0, window.innerHeight], [0, 100])

  const line1 = useTypingEffect('const dev = "Elian Hernandez";', 45)
  const line2 = useTypingEffect('const role = "Backend Developer";', line1.done ? 40 : 99999)
  const line3 = useTypingEffect('const stack = ["Node.js", "TS", "AWS", "React"];', line2.done ? 35 : 99999)

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient orb background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${gradientX}% ${gradientY}%, rgba(245,166,35,0.06), transparent 60%)`,
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-amber-accent/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — Photo + Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex-shrink-0"
          >
            {/* Glow ring behind photo */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber-accent/20 via-transparent to-cyan-accent/10 blur-xl" />

            <div className="relative w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-amber-accent/30 shadow-glow-amber">
              <img
                src="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/profile.jpg"
                alt="Elian Hernandez"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/200';
                }}
              />
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-code">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-txt-muted">Open to work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-code text-amber-accent text-sm tracking-widest uppercase mb-4"
            >
              // hello world
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-txt-primary mb-4 leading-tight"
            >
              Elian
              <span className="text-amber-accent"> Hernandez</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="font-serif text-xl lg:text-2xl text-txt-muted mb-8 italic"
            >
              Building scalable systems from Medellín, Colombia
            </motion.p>

            {/* Terminal code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="glass-card p-5 mb-8 text-left max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-txt-dim font-code">elian.ts</span>
              </div>
              <code className="font-code text-sm leading-7 block">
                <span className="text-txt-dim">1 </span>
                <span className="text-cyan-accent">const</span>{' '}
                <span className="text-txt-primary">{line1.displayed}</span>
                {!line1.done && <span className="inline-block w-[2px] h-4 bg-amber-accent animate-pulse ml-0.5 align-middle" />}
                <br />
                <span className="text-txt-dim">2 </span>
                <span className="text-cyan-accent">const</span>{' '}
                <span className="text-txt-primary">{line2.displayed}</span>
                {line1.done && !line2.done && <span className="inline-block w-[2px] h-4 bg-amber-accent animate-pulse ml-0.5 align-middle" />}
                <br />
                <span className="text-txt-dim">3 </span>
                <span className="text-cyan-accent">const</span>{' '}
                <span className="text-txt-primary">{line3.displayed}</span>
                {line2.done && !line3.done && <span className="inline-block w-[2px] h-4 bg-amber-accent animate-pulse ml-0.5 align-middle" />}
                {line3.done && <span className="inline-block w-[2px] h-4 bg-amber-accent animate-pulse ml-0.5 align-middle" />}
              </code>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-7 py-3 rounded-lg bg-amber-accent text-deep font-code font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-glow-amber"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-accent to-amber-dim opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <a
                href="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/CV.pdf"
                target="_blank"
                className="flex items-center gap-2 px-7 py-3 rounded-lg border border-border text-txt-primary font-code text-sm transition-all duration-300 hover:border-amber-accent/40 hover:text-amber-accent hover:shadow-glow-amber"
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <SocialLink href="https://www.linkedin.com/in/elian-hernandez-323828299/" icon={<FaLinkedin />} label="LinkedIn" />
              <SocialLink href="https://github.com/1Eliaaaan" icon={<FaGithub />} label="GitHub" />
              <SocialLink href="mailto:elianhernandezc16@gmail.com" icon={<FaEnvelope />} label="Email" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-card text-txt-muted transition-all duration-300 hover:border-amber-accent/40 hover:text-amber-accent hover:shadow-glow-amber"
    aria-label={label}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {React.cloneElement(icon as React.ReactElement, { size: 18 })}
  </motion.a>
)

export default Hero
