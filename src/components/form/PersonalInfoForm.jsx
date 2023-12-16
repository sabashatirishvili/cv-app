import React, { useState } from 'react';
function PersonalInfoForm({ personalInfo, onPersonalInfoChange }) {
  return (
    <fieldset action="">
      <input
        type="text"
        name="name"
        value={personalInfo.name}
        onChange={onPersonalInfoChange}
      />
      <input
        type="text"
        name="lastName"
        value={personalInfo.lastName}
        onChange={onPersonalInfoChange}
      />
      <input
        type="text"
        name="email"
        value={personalInfo.email}
        onChange={onPersonalInfoChange}
      />
      <input
        type="text"
        name="phone"
        value={personalInfo.phone}
        onChange={onPersonalInfoChange}
      />
      <input
        type="text"
        name="age"
        value={personalInfo.age}
        onChange={onPersonalInfoChange}
      />
    </fieldset>
  );
}

export default PersonalInfoForm;
