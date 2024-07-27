import React from "react";

function CredlyBadge(props) {
  let imgSrc = "images/" + props.imageName
  let imgLink ="";
  return (
    <figure className="is-inline-block image">
      <a href={imgLink} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={props.badgeName}  className="education-img" />
        <p className="subtitle">{props.badgeName}</p>
      </a>
    </figure>
  );
}

export default CredlyBadge;
