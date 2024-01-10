import React from 'react';
import Collapsed from './Collapsed';
import EducationForm from './form/EducationForm';
import ExperienceForm from './form/ExperienceForm';

function FormGroup(data, type) {
  console.log(data);
  return (
    <div className="form-group">
      {/* <div className="forms">
        {data.map(item => (
          <Collapsed
            data={item}
            formComponent={
              type === 'education' ? <EducationForm data={item} /> : <ExperienceForm data={item} />
            }
          />
        ))}
      </div> */}
      <button className="add"></button>
    </div>
  );
}

export default FormGroup;
