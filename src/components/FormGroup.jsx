import React from 'react';
import Collapsed from './Collapsed';
import EducationForm from './form/EducationForm';
import '../styles/formGroup.css';
import { HiPlusCircle } from 'react-icons/hi';

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
    <button className='add'>
      <HiPlusCircle className='plus-icon'/>
      <span className='add-text'>Add new</span>
    </button>
    </div>
  );
}

export default FormGroup;
