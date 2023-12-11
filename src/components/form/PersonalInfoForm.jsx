import React from 'react';
function PersonalInfoForm({ name, lastName, email, phone, age } ) {
  return (
    <form action="">
      <input type="text" value={name} />
      <input type="text" value={lastName} />
      <input type="text" value={email} />
      <input type="text" value={phone} />
      <input type="text" value={age} />
    </form>
  );
}

export default PersonalInfoForm;
