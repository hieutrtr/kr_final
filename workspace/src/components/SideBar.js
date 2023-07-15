import React from 'react';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './SideBar.css';

function SideBar() {
  return (
    <aside className="sidebar">
      <Menu>
        <MenuItem>Chapter 1</MenuItem>
        <MenuItem>Chapter 2</MenuItem>
        <MenuItem>Chapter 3</MenuItem>
      </Menu>
    </aside>
  );
}

export default SideBar;
