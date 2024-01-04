import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function EducationForm({ education, data, onButtonClick, onEducationChange }) {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(data).every(value => value.trim() !== '');
    setValid(isValid);
  }, [data]);

  return (
    <div className="container">
      <button onClick={onButtonClick} >+</button>
      {education.map(item => (
        <div key={uuidv4()}>
          <div>
            <div>{item.name}</div>
            <div>{item.title}</div>
            <div>
              <span>{item.from} </span>-<span> {item.to}</span>
            </div>
            <button>X</button>
          </div>
          <form action="">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onEducationChange}
              required
            />
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={onEducationChange}
              required
            />
            <input
              type="date"
              name="from"
              id="from"
              value={data.from}
              onChange={onEducationChange}
              required
            />
            <input
              type="date"
              name="to"
              id="to"
              value={data.to}
              onChange={onEducationChange}
              required
            />
            <input
              type="button"
              value="Save"
              onClick={onButtonClick}
              disabled={!valid}
            />
          </form>
        </div>
      ))}
    </div>
  );
}

export default EducationForm;
