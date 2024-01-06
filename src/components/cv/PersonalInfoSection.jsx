import React from 'react';
import '../../styles/cv/PersonalInfoSection.css';

function PersonalInfoSection({ name, lastName, email, phone, age }) {
  return (
    <div className="personal-section">
      <h2 className='name'>{name} {lastName}</h2>
      <div className='personal-info'>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{age}</div>
      </div>
    </div>
  );
}

export default PersonalInfoSection;
