import React from 'react';
import '../../styles/cv/PersonalInfoSection.css';

function PersonalInfoSection({ data }) {
  return (
    <div className="personal-section">
      <h2 className='name'>{data.name} {data.lastName}</h2>
      <div className='personal-info'>
        <div>{data.email}</div>
        <div>{data.phone}</div>
        <div>{data.address}</div>
      </div>
    </div>
  );
}

export default PersonalInfoSection;
