import React from 'react';
import '../../styles/cv/ExperienceSection.css';
import { v4 } from 'uuid';

function EducationSection({ data }) {
  const checkInfo = (obj) => obj.name && obj.title;
  const checkYears = (obj) => obj.from && obj.to;

  return (
    <div>
      {data.length > 0 && <h1 className="edu-title">EDUCATION</h1>}

      <div>
        {data.map(item => (
          <div key={v4()}>
            <div className="edu-header">
              {checkInfo(item) && <span>{item.name} - {item.title}</span>}
            </div>
            <div className="edu-info">
              {checkYears(item) && (
                <span>{new Date(item.from).getFullYear()} - {new Date(item.to).getFullYear()}</span>
              )}
            </div>
            <p className='exp-desc'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;