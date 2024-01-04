import React from 'react'
import {v4 as uuidv4} from 'uuid';
import user from '../assets/User.svg'
import briefcase from '../assets/Briefcase.svg'
import education from '../assets/AcademicCap.svg'
import '../styles/Menu.css'


function Menu() {
  const items = [
    {
      title: "Personal Information",
      icon: user
    },
    {
      title: "Education",
      icon: education
    },
    {
      title: "Experience",
      icon: briefcase
    },
  ]
    
  return (
    <div className='menu-container'>
      {items.map(item => (
        <div className="singleItem" key={uuidv4()}>
          <img src={item.icon} alt="img" className='icon' />
          <h3 className='menu-title'>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Menu