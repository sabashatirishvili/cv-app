import React, { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import '../../styles/form/EducationForm.css';

function EducationForm({ data, onSave, onDelete, index }) {
  const [educationData, setEducationData] = useState(data);

  const handleSave = e => {
    e.preventDefault();
    onSave(index, educationData, 'education');
  };

  const handleDelete = e => {
    e.preventDefault();
    onDelete(index);
  };
  return (
    <div className="form">
      <h1>Education</h1>
      <div className="inputs">
        <div>
          <label htmlFor="name">School</label>
          <input
            type="text"
            name="name"
            value={educationData.name}
            onChange={e => {
              setEducationData({ ...educationData, name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="title">Title of Study</label>
          <input
            type="text"
            name="title"
            value={educationData.title}
            onChange={e => {
              setEducationData({ ...educationData, title: e.target.value });
            }}
          />
        </div>
        <h3 className="date-title">Date of Study</h3>
        <div className="date">
          <div className="from">
            <label htmlFor="from">From</label>
            <input
              type="date"
              name="from"
              id="from"
              value={educationData.from}
              onChange={e => {
                setEducationData({ ...educationData, from: e.target.value });
              }}
            />
          </div>
          <div className="to">
            <label htmlFor="to">To</label>
            <input
              type="date"
              name="to"
              id="to"
              value={educationData.to}
              onChange={e => {
                setEducationData({ ...educationData, to: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      `<div className="control-buttons">
        <input
          type="button"
          className="button save"
          value="Save"
          onClick={handleSave}
        />
        <div className="delete">
          <HiTrash className="delete-icon" onClick={handleDelete} />
        </div>
      </div>`
    </div>
  );
}

export default EducationForm;
