// entire file content ...

import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

function TopMenu({ onSectionTypeSelect }) {
  const handleSectionTypeClick = (sectionType) => {
    onSectionTypeSelect(sectionType);
  };

  return (
    <nav className="top-menu">
      <Link to="/chapters" className="menu-item" onClick={() => handleSectionTypeClick('chapter')}>Chapters</Link>
      <Link to="/definition" className="menu-item" onClick={() => handleSectionTypeClick('definition')}>Definition</Link>
      <Link to="/concept" className="menu-item" onClick={() => handleSectionTypeClick('concept')}>Concept</Link>
      <Link to="/exercise" className="menu-item" onClick={() => handleSectionTypeClick('exercise')}>Exercise</Link>
      <Link to="/about" className="menu-item" onClick={() => handleSectionTypeClick('about')}>About</Link>
    </nav>
  );
}

export default TopMenu;

// ... rest of the file ...
