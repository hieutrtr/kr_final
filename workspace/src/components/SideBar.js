import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import chaptersMock from '../data/Mocks';

function SideBar() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    setChapters(chaptersMock);
  }, []);

  return (
    <Sidebar>
      <Menu iconShape="square">
        {chapters.map(chapter => (
          <SubMenu key={`chapter-${chapter.id}`} label={`Chapter ${chapter.id}`}>
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
