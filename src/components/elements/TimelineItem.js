import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading  has-text-white">{props.date}</p>
        <h1 className="title is-4  has-text-white"><a target="_blank" rel="noreferrer" href={`${props.website}`}>{props.company}</a></h1>
        <h2 className="subtitle is-6  has-text-white">{props.position}</h2>
        <p className=" has-text-white" style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
