import React from 'react';

function EducationForm() {
  return (
    <div className="form">
      <h1>Education</h1>
      <div className="inputs">
        <div>
          <label htmlFor="name">First Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" />
        </div>
      </div>
      <input type="button" className="button" value="Save" />
    </div>
  );
}

export default EducationForm;
