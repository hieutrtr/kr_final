import React from 'react';
import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './SideBar.css';

function SideBar() {
  return (
    <aside className="sidebar">
      <Menu>
        <SubMenu label="Chapters">
          <MenuItem>Chapter 1</MenuItem>
          <MenuItem>Chapter 2</MenuItem>
          <MenuItem>Chapter 3</MenuItem>
        </SubMenu>
      </Menu>
    </aside>
  );
}

export default SideBar;
