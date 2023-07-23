// entire file content ...

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

function TopMenu({ onSectionTypeSelect }) {
  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionTypeClick = (sectionType) => {
    onSectionTypeSelect(sectionType);
    setSelectedSection(sectionType);
  };

  return (
    <nav className="top-menu">
      <Link to="/chapter" className={`menu-item ${selectedSection === 'chapter' ? 'selected' : ''}`} onClick={() => handleSectionTypeClick('chapter')}>Lý Thuyết</Link>
      <Link to="/definition" className={`menu-item ${selectedSection === 'definition' ? 'selected' : ''}`} onClick={() => handleSectionTypeClick('definition')}>Khái Niệm</Link>
      <Link to="/concept" className={`menu-item ${selectedSection === 'concept' ? 'selected' : ''}`} onClick={() => handleSectionTypeClick('concept')}>Tính Chất</Link>
      <Link to="/exercise" className={`menu-item ${selectedSection === 'exercise' ? 'selected' : ''}`} onClick={() => handleSectionTypeClick('exercise')}>Bài Tập</Link>
      <Link to="/about" className={`menu-item ${selectedSection === 'about' ? 'selected' : ''}`} onClick={() => handleSectionTypeClick('about')}>Thông Tin Nhóm</Link>
    </nav>
  );
}

export default TopMenu;
