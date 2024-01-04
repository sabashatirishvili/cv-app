import React from 'react';
import github from '../assets/github-mark.svg';
import '../styles/Footer.css';
function Footer() {
  return (
    <a href="https://github.com/sabashatirishvili/cv-app" target='_blank' className="footer-container">
      <img className="gh-icon" src={github} alt="github" />
      <span className="github-title">sabashatirishvili</span>
    </a>
  );
}

export default Footer;
