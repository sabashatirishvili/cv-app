import React, { useState } from 'react';
import '../../styles/PersonalInfoForm.css';
function PersonalInfoForm({ personalInfo, canEdit, onPersonalInfoChange }) {
  return (
    <div className="form">
      <h1>Personal Information</h1>
      <form className="inputs">
        <div>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="name"
            value={personalInfo.name}
            onChange={onPersonalInfoChange}
            readOnly={canEdit}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            onChange={onPersonalInfoChange}
            readOnly={canEdit}
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            name="email"
            value={personalInfo.email}
            onChange={onPersonalInfoChange}
            readOnly={canEdit}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={personalInfo.phone}
            onChange={onPersonalInfoChange}
            readOnly={canEdit}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            value={personalInfo.age}
            onChange={onPersonalInfoChange}
            readOnly={canEdit}
          />
        </div>
      </form>
      <input type="button" className="button" value="Save" />
    </div>
  );
}

export default PersonalInfoForm;
