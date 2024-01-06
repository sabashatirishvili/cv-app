import { useState } from 'react';
import './App.css';
import PersonalInfoForm from './components/form/PersonalInfoForm';
import EducationForm from './components/form/EducationForm';
import data from './data';
import PersonalInfoSection from './components/cv/PersonalInfoSection';
import EducationSection from './components/cv/EducationSection';
import ExperienceSection from './components/cv/ExperienceSection';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ExperienceForm from './components/form/ExperienceForm';

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

  const handleAdd = (e, setState, obj) => {
    e.preventDefault();
    setState(prev => [...prev, obj]);
  };

  const handleSelect = e => {
    if (e.target.id) {
      setSelected(e.target.id);
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
        {selected === 'education' && <EducationForm />}
        {selected === 'experience' && <ExperienceForm />}
        <Footer />
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
