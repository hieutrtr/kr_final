import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

function TopMenu() {
  return (
    <nav className="top-menu">
      <Link to="/chapters" className="menu-item">Chapters</Link>
      <Link to="/definition" className="menu-item">Definition</Link>
      <Link to="/concept" className="menu-item">Concept</Link>
      <Link to="/exercise" className="menu-item">Exercise</Link>
      <Link to="/about" className="menu-item">About</Link>
    </nav>
  );
}

export default TopMenu;
