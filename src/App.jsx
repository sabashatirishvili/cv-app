import { useState } from 'react';
import './App.css';
import PersonalInfoForm from './components/form/PersonalInfoForm';
import EducationForm from './components/form/EducationForm';
import data from './data';
import React from 'react';
import PersonalInfoSection from './components/cv/PersonalInfoSection';
import EducationSection from './components/cv/EducationSection';
import ExperienceSection from './components/cv/ExperienceSection';
import Menu from './components/Menu';
import ExperienceForm from './components/form/ExperienceForm';
import FormGroup from './components/FormGroup';

function App() {
  const [personal, setPersonal] = useState(data.personal);
  const [education, setEducation] = useState(data.education);
  const [educationData, setEducationData] = useState({
    name: 'Harvard',
    title: 'Bachelor of Arts',
    from: '3',
    to: '4',
  });
  console.log(education);
  const [experience, setExperience] = useState(data.experience);
  const [expData, setExpData] = useState({
    name: '',
    title: '',
    from: '',
    to: '',
    desc: '',
  });
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
          <FormGroup data={education} type="education" />
        )}
        {selected === 'experience' && <ExperienceForm />}
      </div>
      <div className="cv-container">
        <div className="cv">
          <PersonalInfoSection
            name={personal.name}
            lastName={personal.lastName}
            email={personal.email}
            phone={personal.phone}
            age={personal.address}
          />
          <EducationSection />
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
}

export default App;
