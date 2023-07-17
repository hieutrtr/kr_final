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
      <Link to="/about" className="menu-item" onClick={() => handleSectionTypeClick('about')}>About</Link>
    </nav>
  );
}

export default TopMenu;
