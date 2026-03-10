import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "profile", label: "Profile" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
];

const VerticalNav: React.FC = () => {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActive(section.id);
            }
          });
        },
        { threshold: [0.3] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    const checkInitialVisible = () => {
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActive(s.id);
          return;
        }
      }
      setActive(SECTIONS[0].id);
    };

    checkInitialVisible();

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-50">
      {/* Vertical gradient line */}
      <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />

      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <div key={s.id} className="relative group z-10">
            <motion.button
              onClick={() => scrollTo(s.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                isActive
                  ? "bg-amber-accent shadow-[0_0_12px_rgba(245,166,35,0.4)]"
                  : "bg-txt-dim hover:bg-txt-muted"
              }`}
              aria-label={`Scroll to ${s.label}`}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-amber-accent"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.button>

            {/* Label tooltip */}
            <button
              onClick={() => scrollTo(s.id)}
              className={`absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md px-3 py-1 font-code text-xs transition-all duration-300 ${
                isActive
                  ? "text-amber-accent bg-card border border-amber-accent/20 opacity-100 translate-x-0"
                  : "text-txt-muted bg-card/80 border border-border opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </button>
          </div>
        );
      })}
    </nav>
  );
};

export default VerticalNav;
