import React from 'react';

function PersonalInfoSection({ name, lastName, email, phone, age }) {
  return (
    <div>
      <div>{name}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{age}</div>
    </div>
  );
}

export default PersonalInfoSection;
