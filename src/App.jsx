import { useState } from 'react';
import './App.css';
import PersonalInfoForm from './components/form/PersonalInfoForm';
import EducationForm from './components/form/EducationForm';
import ExperienceForm from './components/form/ExperienceForm';
import data from './data';
import PersonalInfoSection from './components/cv/PersonalInfoSection';
import EducationSection from './components/cv/EducationSection';
import ExperienceSection from './components/cv/ExperienceSection';

function App() {
  const [personal, setPersonal] = useState(data.personal);
  const [education, setEducation] = useState(data.education);
  const [educationData, setEducationData] = useState({
    name: '',
    title: '',
    from: '',
    to: '',
  });
  const [experience, setExperience] = useState(data.experience);
  const [expData, setExpData] = useState({
    company: '',
    title: '',
    from: '',
    to: '',
    desc: '',
  });
  const [edit, setEdit] = useState(True);

  const handleInputChange = (e, setState) => {
    console.log('Change event triggered');
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (e, setState, obj) => {
    e.preventDefault();
    setState(prev => [...prev, obj]);
  };

  console.log(expData);
  console.log(experience);

  return (
    <div className="container">
      <div className="form-container">
        <form action="">
          <PersonalInfoForm
            personalInfo={personal}
            onPersonalInfoChange={e => handleInputChange(e, setPersonal)}
          />
          <EducationForm
            education={educationData}
            onButtonClick={e => handleAdd(e, setEducation, educationData)}
            onEducationChange={e => handleInputChange(e, setEducationData)}
          />
          <ExperienceForm
            data={expData}
            j
            onAdd={e => handleAdd(e, setExperience, expData)}
            onInputChange={e => handleInputChange(e, setExpData)}
          />
          <button>Edit</button>
          <button>Submit</button>
        </form>
      </div>
      <div className="cv-container">
        <PersonalInfoSection
          name={personal.name}
          lastName={personal.lastName}
          email={personal.email}
          phone={personal.phone}
          age={personal.age}
        />
        <EducationSection />
        <ExperienceSection />
      </div>
    </div>
  );
}

export default App;
