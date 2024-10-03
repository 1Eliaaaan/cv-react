import React from "react";

function CredlyBadge(props) {
  let imgSrc = "images/" + props.imageName;

  return (
    <figure className="is-inline-block image"  style={{ marginTop: '2rem' }}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={props.badgeName} className="education-img is-rounded" />
        <p className="subtitle has-text-white" style={{ marginTop: '2rem' }}>{props.badgeName}</p>
      </a>
    </figure>
  );
}

export default CredlyBadge;