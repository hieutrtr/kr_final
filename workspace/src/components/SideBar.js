import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SideBar() {
  const [chapters, setChapters] = useState([]);

  const chaptersMock = [
    {
      id: 1,
      articles: [
        { id: 1, title: 'Article 1' },
        { id: 2, title: 'Article 2' },
        { id: 3, title: 'Article 3' }
      ]
    },
    {
      id: 2,
      articles: [
        { id: 4, title: 'Article 4' },
        { id: 5, title: 'Article 5' },
        { id: 6, title: 'Article 6' }
      ]
    },
    // ... add more chapters and articles as needed
  ];

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
