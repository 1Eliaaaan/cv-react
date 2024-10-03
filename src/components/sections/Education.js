import React from "react";
import CredlyBadge from "../elements/CredlyBadge";
import Resume from "../../resume.json";

function buildBadges(certificates) {
  let credlyBadges = [];
  let columnSize = 12 / certificates.length;
  let columnClass = "column has-text-centered is-" + columnSize;
  certificates.forEach((cert, index) => {
    credlyBadges.push(
      <div key={index} className={columnClass}>
        <CredlyBadge
          width="186"
          height="186"
          imageId={cert.x_imageId}
          imageName={cert.x_imageName}
          badgeId={cert.x_badgeId}
          badgeName={cert.name + " by " + cert.issuer}
          link={cert.url}
        />
      </div>
    );
  });
  return credlyBadges;
}

function Education() {
  return (
    <section className="section has-background-dark" id="Education">
      <div className="container">
        <h1 className="title has-text-white">Education</h1>
        <div className="columns is-centered">
          {buildBadges(Resume.certificates)}
        </div>
      </div>
    </section>
  );
}

export default Education;
