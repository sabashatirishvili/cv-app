import React from 'react';
import Collapsed from './Collapsed';
import EducationForm from './form/EducationForm';
import ExperienceForm from './form/ExperienceForm';

function FormGroup(data, type) {
  console.log('data:');
  const info = data.data;
  return (
    <div className="form-group">
      <div className="forms">
        {info.map(item => (
          <Collapsed
            data={item}
            formComponent={<EducationForm data={item} />}
          />
        ))}
      </div>
      <button className="add">Add</button>
    </div>
  );
}

export default FormGroup;
