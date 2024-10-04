import React from "react";
import Resume from "../../resume.json";

function Languages() {
  return (
    <section className="section has-background-dark" id="Education">
      <div className="container">
        <h1 className="title mt-4 has-text-white">Languages</h1>
        <div className="columns is-centered">
          <ul className="language-level">
            {Resume.languages.map((language) => (
              <li key={language.language}>
                <p className="title is-5 has-text-centered mt-4 has-text-white" style={{marginTop : '1rem'}}>{language.language}</p>
                <progress className="progress is-success" value={language.fluency} max="100"></progress>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Languages;
