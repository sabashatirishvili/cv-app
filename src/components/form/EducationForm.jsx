import React from 'react'

function EducationForm() {
  return (
    <fieldset action="">
      <input type="text" name="name" />
      <input type="text" name="title" />
      <input type="date" name="from" id="from" />
      <input type="date" name="to" id="to" />
    </fieldset>
  )
}

export default EducationForm