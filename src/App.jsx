import React from 'react';
import './App.css';
import PersonalInfoForm from './components/form/PersonalInfoForm';
import EducationForm from './components/form/EducationForm';
import ExperienceForm from './components/form/ExperienceForm';
import data from './data';
import PersonalInfoSection from './components/cv/PersonalInfoSection';
import EducationSection from './components/cv/EducationSection';
import ExperienceSection from './components/cv/ExperienceSection';

function App() {
  const [personal, setPersonal] = React.useState(data.personal);

  const handlePersonalInfoChange = e => {
    console.log('Change event triggered');
    const { name, value } = e.target;
    setPersonal(prevPersonal => ({
      ...prevPersonal,
      [name]: value,
    }));

    console.log(personal);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form action="">
          <PersonalInfoForm
            personalInfo={personal}
            onPersonalInfoChange={handlePersonalInfoChange}
          />
          <EducationForm />
          <ExperienceForm />
          <input type="submit" value="Submit" />
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
