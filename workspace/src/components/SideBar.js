import React, { useState } from 'react';
import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header" onClick={handleExpand}>
        <span>Chapters</span>
        <span className={`arrow ${isExpanded ? 'expanded' : ''}`}></span>
      </div>
      {isExpanded && (
        <Menu>
          <MenuItem>Chapter 1</MenuItem>
          <MenuItem>Chapter 2</MenuItem>
          <MenuItem>Chapter 3</MenuItem>
        </Menu>
      )}
    </aside>
  );
}

export default SideBar;
