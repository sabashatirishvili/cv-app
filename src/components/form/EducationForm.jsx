import React from 'react';
import '../../styles/form/EducationForm.css';
import Collapsed from '../Collapsed';

function EducationForm({ data }) {
  return (
    <div className="form">
      <h1>Education</h1>
      <div className="inputs">
        <div>
          <label htmlFor="name">School</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="title">Title of Study</label>
          <input type="text" name="title" />
        </div>
        <h3 className="date-title">Date of Study</h3>
        <div className="date">
          <div className="from">
            <label htmlFor="from">From</label>
            <input type="date" name="from" id="from" />
          </div>
          <div className="to">
            <label htmlFor="to">To</label>
            <input type="date" name="to" id="to" />
          </div>
        </div>
      </div>
      <input type="button" className="button" value="Save" />
    </div>
  );
}

export default EducationForm;
