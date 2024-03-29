import React from 'react';
import Collapsed from './Collapsed';
import EducationForm from './form/EducationForm';
import ExperienceForm from './form/ExperienceForm';
import '../styles/formGroup.css';
import { HiPlusCircle } from 'react-icons/hi';
import { v4 as uuid } from 'uuid';

function FormGroup({ data, type, onSave, onAdd, onDelete }) {
  console.log('data:');
  console.log(data);

  const handleAdd = e => {
    e.preventDefault();
    onAdd(
      {
        name: '',
        title: '',
        from: '',
        to: '',
      },
      type,
    );
  };
  return (
    <div className="form-group">
      <div className="forms">
        {data.map((item, i) => (
          <Collapsed
            data={item}
            formComponent={
              type === 'education' ? (
                <EducationForm
                  data={item}
                  onSave={onSave}
                  index={i}
                  onDelete={onDelete}
                />
              ) : (
                <ExperienceForm
                  data={item}
                  onSave={onSave}
                  index={i}
                  onDelete={onDelete}
                />
              )
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
