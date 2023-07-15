import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SideBar() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/chapters')
      .then(response => response.json())
      .then(data => setChapters(data))
      .catch(error => console.error(error));
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
