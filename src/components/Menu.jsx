import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HiAcademicCap } from 'react-icons/hi2';
import { HiUser } from 'react-icons/hi';
import { HiBriefcase } from 'react-icons/hi';
import '../styles/Menu.css';

function Menu({ onSelect, selected }) {
  const items = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: <HiUser className="icon" />,
    },
    {
      id: 'education',
      title: 'Education',
      icon: <HiAcademicCap className="icon" />,
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: <HiBriefcase className="icon" />,
    },
  ];


  return (
    <div className="menu-container">
      {items.map(item => (
        <div
          className="singleItem"
          id={item.id}
          key={uuidv4()}
          onClick={() => onSelect(item.id)}
          style={{
            backgroundColor: selected === item.id ? '#f3f4f6' : '#fff',
            color: selected === item.id ? '#2563eb' : 'black',
          }}
        >
          {item.icon}
          <h3 className="menu-title">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Menu;
