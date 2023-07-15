import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SideBar() {
  return (
    <Sidebar>
      <Menu iconShape="square">
        {Array.from({ length: 12 }, (_, index) => (
          <SubMenu key={`chapter-${index + 1}`} label={`Chapter ${index + 1}`}>
            {Array.from({ length: 3 }, (_, articleIndex) => (
              <MenuItem key={`article-${index + 1}-${articleIndex + 1}`}>
                Article {articleIndex + 1}
              </MenuItem>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
