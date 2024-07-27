import React from "react";
import Resume from "../../resume.json";



function Languages() {
  return (
    <section className="section" id="Education">
      <div className="container">
        <h1 className="title">Languages</h1>
        <div className="columns is-centered">
        <ul className="language-level">
          {
            Resume.languages.map((language)=>
           
              
               <li>
  <p className="title is-4">{language.language}</p>
  <progress class="progress is-success" value={language.fluency} max="100"></progress> 
               </li>
            
          
            )
          }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Languages;
