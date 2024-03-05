import React from 'react';
import Collapsed from './Collapsed';
import EducationForm from './form/EducationForm';
import '../styles/formGroup.css';
import { HiPlusCircle } from 'react-icons/hi';
import { v4 as uuid } from 'uuid';

function FormGroup({ data, type, onEducationSave, onAdd, onDelete }) {
  console.log('data:');
  console.log(data);

  const handleAdd = e => {
    e.preventDefault();
    onAdd({
      name: '',
      title: '',
      from: '',
      to: '',
    });
  };
  return (
    <div className="form-group">
      <div className="forms">
        {data.map((item, i) => (
          <Collapsed
            data={item}
            formComponent={
              <EducationForm data={item} onSave={onEducationSave} index={i} onDelete={onDelete}/>
            }
            key={uuid()}
          />
        ))}
      </div>
      <button className="add" onClick={handleAdd}>
        <HiPlusCircle className="plus-icon" />
        <span className="add-text">Add new</span>
      </button>
    </div>
  );
}

export default FormGroup;
