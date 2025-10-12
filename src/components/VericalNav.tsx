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
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActive(section.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    observer.observe(el);
    observers.push(observer);
  });

  // 🔧 Al cargar, marcar la primera visible
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
    setActive(SECTIONS[0].id); // fallback al hero
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
    <>


      {/* Nav vertical (dots + labels) */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center space-y-6 z-50">
        {/* Línea vertical */}
        <div className="absolute w-px bg-gray-700 h-[23vh] rounded" />

        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <div key={s.id} className="relative group">
              <motion.button
                onClick={() => scrollTo(s.id)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`relative z-20 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? "bg-green-500 border-green-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                    : "bg-gray-700 border-gray-500 hover:bg-gray-600"
                }`}
                aria-label={`Scroll to ${s.label}`}
              />

              {/* Label: visible on hover OR if active */}
              <button
                className={`absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md px-3 py-1 text-sm text-gray-200 bg-black/60 border border-gray-700 transition-all duration-200
             opacity-100 translate-x-0" : "opacity-0 group-hover:opacity-100 -translate-x-1"}
                `}
                style={{ transformOrigin: "left center" }}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
                
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VerticalNav;
