import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/sidebar.css'; // Update the import statement

function SideBar() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <SubMenu title="Chapters">
          <MenuItem>Chapter 1</MenuItem>
          <MenuItem>Chapter 2</MenuItem>
          <MenuItem>Chapter 3</MenuItem>
        </SubMenu>
        <SubMenu title="Articles">
          <MenuItem>Article 1</MenuItem>
          <MenuItem>Article 2</MenuItem>
          <MenuItem>Article 3</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}

export default SideBar;
