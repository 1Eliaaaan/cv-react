import React, { useState } from 'react';

function Skill(props) {
  const [isHovered, setIsHovered] = useState(false);

  function check(str) {
    return props.description[str];
  }

  return (
    <div
      className={`card skill-card is-clickable ${isHovered ? 'is-hovered' : ''} has-background-dark`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
    >
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <span
              className={`skill-icon has-text-link is-size-3 fa-solid ${props.icon}`}
            ></span>
          </div>
          <div className="media-content"
          style={{ marginTop : '1rem' }}>
            <p
              className="skill-title is-size-6 has-text-white"
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
            {props.description &&
              Object.keys(props.description).map((subcategory) => (
                <div
                  key={subcategory}
                  style={{
                    maxHeight: isHovered ? '500px' : '0',
                    overflow: 'hidden',
                    opacity: isHovered ? 1 : 0,
                    transition: 'max-height 0.5s ease, opacity 0.5s ease',
                  }}
                >
                  <p className="skill-subtitle subtitle  has-text-white is-size-6 ">
                    {subcategory}
                  </p>
                  {check(subcategory).map((item) => (
                    <p key={item} style={{ marginLeft: '20px' }} className='has-text-grey-light'>
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
