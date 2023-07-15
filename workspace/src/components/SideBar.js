import React from 'react';
import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './SideBar.css';

function SideBar() {
  return (
    <aside className="sidebar">
      <Menu menuButton={<button>Chapters</button>}>
        <MenuItem>Chapter 1</MenuItem>
        <MenuItem>Chapter 2</MenuItem>
        <MenuItem>Chapter 3</MenuItem>
      </Menu>
    </aside>
  );
}

export default SideBar;
