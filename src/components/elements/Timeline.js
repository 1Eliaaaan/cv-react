import React from "react";
import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";
import Resume from "../../resume.json";

function Timeline() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark has-background-link">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.work
        .map(item => {
          return new Date(item.startDate).getFullYear();
        }).filter((value, index, self) => self.indexOf(value) === index)
        .map((year, i) => {
          let content = [];
          content.push(
            <TimelineHeader key={i} year={year}/>
          );
          content.push(
            Resume.work
              .filter(work => new Date(work.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <TimelineItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    company={item.company}
                    position={item.position}
                    website={item.website}
                    summary={item.summary}
                  />
                );
              })
          );
          return content;
        })}
    </div>
  );
}

export default Timeline;
