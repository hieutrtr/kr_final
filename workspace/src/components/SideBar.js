import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SideBar() {
  return (
    <Sidebar>
      <Menu iconShape="square">
        <SubMenu label="Chapters">
          <MenuItem>Chapter 1</MenuItem>
          <MenuItem>Chapter 2</MenuItem>
          <MenuItem>Chapter 3</MenuItem>
        </SubMenu>
        <SubMenu label="Articles">
          <MenuItem>Article 1</MenuItem>
          <MenuItem>Article 2</MenuItem>
          <MenuItem>Article 3</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
