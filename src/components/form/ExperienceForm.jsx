import React from 'react';

function ExperienceForm() {
  return (
    <div className="form">
      <h1>Education</h1>
      <div className="inputs">
        <div>
          <label htmlFor="name">Company Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="title">Position Title</label>
          <input type="text" name="title" />
        </div>
        <h3 className="date-title">Date of Work</h3>
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
        <div>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" cols="30" rows="7"></textarea>
        </div>
      </div>
      <input type="button" className="button" value="Save" />
    </div>
  );
}

export default ExperienceForm;
