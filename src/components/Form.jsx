import React from 'react';
import PersonalInfoForm from './form/PersonalInfoForm';
import EducationForm from './form/EducationForm';
import ExperienceForm from './form/ExperienceForm';

export default function Form(data) {
  return (
    <div>
      <PersonalInfoForm
        name={data.personal.name}
        lastName={data.personal.lastName}
        email={data.personal.email}
        phone={data.personal.phone}
        age={data.personal.age}
      />
      <EducationForm data={data.education} />
      <ExperienceForm data={data.experience} />
    </div>
  );
}
