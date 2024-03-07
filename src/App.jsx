import { useState } from 'react';
import './App.css';
import PersonalInfoForm from './components/form/PersonalInfoForm';
import data from './data';
import React from 'react';
import PersonalInfoSection from './components/cv/PersonalInfoSection';
import EducationSection from './components/cv/EducationSection';
import ExperienceSection from './components/cv/ExperienceSection';
import Menu from './components/Menu';
import FormGroup from './components/FormGroup';
import SavePDF from './components/SavePDF';

function App() {
  const [personal, setPersonal] = useState(data.personal);
  const [education, setEducation] = useState(data.education);
  console.log(education);
  const [experience, setExperience] = useState(data.experience);
  const [readOnly, setReadOnly] = useState(false);
  const [selected, setSelected] = useState('personal');

  const handleInputChange = (e, setState) => {
    console.log('Change event triggered');
    let { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = id => {
    if (id) {
      setSelected(id);
    }
  };

  const handleSave = (index, obj, type) => {
    type === 'education'
      ? setEducation(prev => prev.map((item, i) => (i === index ? obj : item)))
      : setExperience(prev => prev.map((item, i) => (i === index ? obj : item)))
  };

  const handleAdd = (obj, type) => {
    type === 'education'
      ? setEducation(prev => [...prev, obj])
      : setExperience(prev => [...prev, obj]);
  };

  const handleDelete = index => {
    setEducation(prev => prev.filter((item, i) => index !== i));
  };


  console.log(selected);
  return (
    <div className="container">
      <div className="form-container">
        <Menu onSelect={handleSelect} selected={selected} />
        {selected === 'personal' && (
          <PersonalInfoForm
            personalInfo={personal}
            canEdit={readOnly}
            onPersonalInfoChange={e => handleInputChange(e, setPersonal)}
          />
        )}
        {/* {selected === 'education' && <EducationForm data={educationData}/>} */}
        {selected === 'education' && (
          <FormGroup
            data={education}
            type={selected}
            onSave={handleSave}
            onAdd={handleAdd}
            onDelete={handleDelete}
          />
        )}
        {selected === 'experience' && (
          <FormGroup
            data={experience}
            type={selected}
            onSave={handleSave}
            onAdd={handleAdd}
            onDelete={handleDelete}
          />
        )}
      </div>
      <div className="cv-container">
        <div className="cv" id="cv">
          <PersonalInfoSection
            data={personal}
          />
          <EducationSection data={education}/>
          <ExperienceSection data={experience} />
        </div>
        <SavePDF/>
      </div>
    </div>
  );
}

export default App;
