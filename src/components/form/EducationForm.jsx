import React, { useState } from 'react';

function EducationForm({ education, onButtonClick, onEducationChange }) {
  return (
    <fieldset action="">
      <input
        type="text"
        name="name"
        value={education.name}
        onChange={onEducationChange}
      />
      <input
        type="text"
        name="title"
        value={education.title}
        onChange={onEducationChange}
      />
      <input
        type="date"
        name="from"
        id="from"
        value={education.from}
        onChange={onEducationChange}
      />
      <input
        type="date"
        name="to"
        id="to"
        value={education.to}
        onChange={onEducationChange}
      />
      <button onClick={onButtonClick}>Add</button>
    </fieldset>
  );
}

export default EducationForm;
