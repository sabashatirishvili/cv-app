import React from 'react';

function ExperienceForm({ data, onInputChange, onAdd }) {
  console.log(data.desc);
  return (
    <div>
      <fieldset>
        <input
          type="text"
          name="company"
          value={data.company}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={onInputChange}
        />
        <input
          type="date"
          name="from"
          id="from"
          value={data.from}
          onChange={onInputChange}
        />
        <input
          type="date"
          name="to"
          id="to"
          value={data.to}
          onChange={onInputChange}
        />
        <textarea
          name="desc"
          id="desc"
          cols="35"
          rows="5"
          value={data.desc}
          onChange={onInputChange}
        ></textarea>
        <button onClick={onAdd}>Add</button>
      </fieldset>
    </div>
  );
}

export default ExperienceForm;
