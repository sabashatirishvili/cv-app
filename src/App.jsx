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

  return (
    <div className="container">
      <div className="form-container">
        <Menu/>
        <PersonalInfoForm
          personalInfo={personal}
          canEdit={readOnly}
          onPersonalInfoChange={e => handleInputChange(e, setPersonal)}
        />
        <Footer/>
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
