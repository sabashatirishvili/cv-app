import React from 'react';
import '../../styles/cv/EducationSection.css';

function EducationSection({ data }) {
  return (
    <div>
      <h1 className="edu-title">EDUCATION</h1>

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
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;
