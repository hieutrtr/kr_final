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
      <Link to="/chapter" className="menu-item" onClick={() => handleSectionTypeClick('chapter')}>Chương</Link>
      <Link to="/definition" className="menu-item" onClick={() => handleSectionTypeClick('definition')}>Định Nghĩa</Link>
      <Link to="/concept" className="menu-item" onClick={() => handleSectionTypeClick('concept')}>Khái Niệm</Link>
      <Link to="/exercise" className="menu-item" onClick={() => handleSectionTypeClick('exercise')}>Bài Tập</Link>
      <Link to="/about" className="menu-item" onClick={() => handleSectionTypeClick('about')}>Thông Tin Nhóm</Link>
    </nav>
  );
}

export default TopMenu;