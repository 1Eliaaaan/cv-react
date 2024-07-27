import React from 'react';

function Skill(props) {
    function check(str){
        return props.description[str]
    }
  console.log("props", props);
  return (
    <div className="card skill-card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <span
              className={`skill-icon has-text-link is-size-3 fa-solid ${props.icon}`}
            ></span>
          </div>
          <div className="media-content">
            <p 
              className="skill-title is-size-6"
              style={{
                position: 'relative',
                display: 'inline-block',
                paddingBottom: '5px', 
              }}
            >
              {props.text && props.text}
              <span
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#3273dc', 
                }}
              ></span>
            </p>
            {props.description && Object.keys(props.description).map((subcategory) => (
  <div key={subcategory}>
    <p className="skill-subtitle subtitle has-text-black is-size-6">
      {subcategory}
    </p>
    {check(subcategory).map(item => (
      <p key={item} style={{ marginLeft: '20px' }}>
        - {item}
      </p>
    ))}
  </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
