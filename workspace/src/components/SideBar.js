// entire file content ...

import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import chaptersMock from '../data/Mocks';
import articlesMock from '../data/ArticlesMock'; // Add import statement for articlesMock
import './SideBar.css'; // Add import statement for SideBar.css

function SideBar() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    setChapters(chaptersMock);
  }, []);

  return (
    <Sidebar>
      <Menu iconShape="square">
        {chapters.map(chapter => (
          <SubMenu title={`${chapter.title}`} key={`chapter-${chapter.id}`} label={`Chapter ${chapter.id}: ${chapter.title}`}>
            {chapter.articles.map(article => (
              <MenuItem key={`article-${chapter.id}-${article.id}`}>
                {article.title}
              </MenuItem>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
