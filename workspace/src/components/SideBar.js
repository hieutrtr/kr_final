import React, { useState } from 'react';
import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './SideBar.css';

function SideBar() {
  const [expanded, setExpanded] = useState(false);

  const handleSidebarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <aside className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="sidebar-header" onClick={handleSidebarToggle}>
        <span className={`arrow ${expanded ? 'expanded' : ''}`}></span>
        <span>Chapters</span>
      </div>
      <Menu className="menu">
        <MenuItem className="menu-item">Chapter 1</MenuItem>
        <MenuItem className="menu-item">Chapter 2</MenuItem>
        <MenuItem className="menu-item">Chapter 3</MenuItem>
      </Menu>
    </aside>
  );
}

export default SideBar;
