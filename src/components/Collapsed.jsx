import React, { useState } from 'react';
import '../styles/Collapsed.css';
import { HiChevronDown } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi';
import EducationForm from './form/EducationForm';

function Collapsed({ data, formComponent }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="collapsed-container">
      <div className="collapsed" onClick={handleClick}>
        <span>{data.name}</span>
        <span>{data.title}</span>
        <div className="date">
          <span>{data.from}</span>
          <span>-</span>
          <span>{data.to}</span>
        </div>
        {collapsed ? <HiChevronRight className='chevron' /> : <HiChevronDown className='chevron'/>}
      </div>
      {!collapsed && formComponent}
    </div>
  );
}

export default Collapsed;
