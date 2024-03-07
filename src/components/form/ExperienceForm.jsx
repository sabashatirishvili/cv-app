import React, { useState } from 'react';
import { HiTrash } from 'react-icons/hi';

function ExperienceForm({ data, onSave, onDelete, index }) {
  const [experience, setExperience] = useState(data);

  const handleSave = e => {
    e.preventDefault();
    onSave(index, experience, 'experience');
  };

  const handleDelete = e => {
    e.preventDefault();
    onDelete(index);
  };
  return (
    <div className="form">
      <h1>Experience</h1>
      <div className="inputs">
        <div>
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            name="name"
            value={experience.name}
            onChange={e => {
              setExperience({ ...experience, name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="title">Position Title</label>
          <input
            type="text"
            name="title"
            value={experience.title}
            onChange={e => {
              setExperience({ ...experience, title: e.target.value });
            }}
          />
        </div>
        <h3 className="date-title">Date of Work</h3>
        <div className="date">
          <div className="from">
            <label htmlFor="from">From</label>
            <input
              type="date"
              name="from"
              value={experience.from}
              id="from"
              onChange={e => {
                setExperience({ ...experience, from: e.target.value });
              }}
            />
          </div>
          <div className="to">
            <label htmlFor="to">To</label>
            <input
              type="date"
              name="to"
              value={experience.to}
              id="to"
              onChange={e => {
                setExperience({ ...experience, to: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            value={experience.desc}
            cols="30"
            rows="7"
            onChange={e => {
              setExperience({ ...experience, desc: e.target.value });
            }}
          ></textarea>
        </div>
      </div>
      <div className="control-buttons">
        <input
          type="button"
          className="button save"
          value="Save"
          onClick={handleSave}
        />
        <div className="delete">
          <HiTrash className="delete-icon" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;
