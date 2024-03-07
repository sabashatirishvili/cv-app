import React from 'react';
import '../../styles/cv/ExperienceSection.css'

function ExperienceSection({data}) {
  return (
    <div>
      <h1 className="edu-title">WORK EXPERIENCE</h1>

      <div>
        {data.map(item => (
          <div>
            <div className="edu-header">
              <span>{item.name}</span> - <span>{item.title}</span>
            </div>
            <div className="edu-info">
              <span>{item.from.split('-')[0]}</span> -
              <span> {item.to.split('-')[0]}</span>
            </div>
            <p className='exp-desc'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
