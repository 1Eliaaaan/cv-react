import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Articles from "../sections/Articles";
import Languages from "../sections/Languages";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      {/* <Articles /> */}
      <Languages />
    </main>
  );
}

export default Content;
