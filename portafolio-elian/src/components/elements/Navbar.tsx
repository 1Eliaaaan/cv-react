import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-green-500 text-xl font-bold">Elian Hernandez</div>
        <div className="flex space-x-12 text-sm">
          <a
            href="#about-me"
            className="text-white relative transition duration-300 hover:text-green-500 group"
          >
            <span className="before:content-['<'] before:absolute before:left-[-20px] before:opacity-0 after:content-['>'] after:absolute after:right-[-20px] after:opacity-0 hover:before:opacity-100 hover:after:opacity-100">
              ABOUT ME
            </span>
          </a>
          <a
            href="#projects"
            className="text-white relative transition duration-300 hover:text-green-500 group"
          >
            <span className="before:content-['<'] before:absolute before:left-[-20px] before:opacity-0 after:content-['>'] after:absolute after:right-[-20px] after:opacity-0 hover:before:opacity-100 hover:after:opacity-100">
              PROJECTS
            </span>
          </a>
          <a
            href="#skills"
            className="text-white relative transition duration-300 hover:text-green-500 group"
          >
            <span className="before:content-['<'] before:absolute before:left-[-20px] before:opacity-0 after:content-['>'] after:absolute after:right-[-20px] after:opacity-0 hover:before:opacity-100 hover:after:opacity-100">
              SKILLS
            </span>
          </a>
          <a
            href="#contact"
            className="text-white relative transition duration-300 hover:text-green-500 group"
          >
            <span className="before:content-['<'] before:absolute before:left-[-20px] before:opacity-0 after:content-['>'] after:absolute after:right-[-20px] after:opacity-0 hover:before:opacity-100 hover:after:opacity-100">
              CONTACT
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
