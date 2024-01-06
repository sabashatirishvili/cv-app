import React, { useState } from 'react';
import '../../styles/form/PersonalInfoForm.css';
function PersonalInfoForm({ personalInfo, onPersonalInfoChange }) {
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
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            onChange={onPersonalInfoChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            name="email"
            value={personalInfo.email}
            onChange={onPersonalInfoChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={personalInfo.phone}
            onChange={onPersonalInfoChange}
          />
        </div>
        <div>
          <label htmlFor="age">Address</label>
          <input
            type="text"
            name="address"
            value={personalInfo.address}
            onChange={onPersonalInfoChange}
          />
        </div>
      </form>
      <input type="button" className="button" value="Save" />
    </div>
  );
}

export default PersonalInfoForm;
