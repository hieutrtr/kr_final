const chaptersMock = [
  {
    id: 1,
    title: 'Chapter 1',
    articles: []
  },
  {
    id: 2,
    title: 'Chapter 2',
    articles: []
  },
  {
    id: 3,
    title: 'Chapter 3',
    articles: []
  },
  {
    id: 4,
    title: 'Chapter 4',
    articles: []
  },
  {
    id: 5,
    title: 'Chapter 5',
    articles: []
  },
  {
    id: 6,
    title: 'Chapter 6',
    articles: []
  },
  {
    id: 7,
    title: 'Chapter 7',
    articles: []
  },
  {
    id: 8,
    title: 'Chapter 8',
    articles: []
  },
  {
    id: 9,
    title: 'Chapter 9',
    articles: []
  },
  {
    id: 10,
    title: 'Chapter 10',
    articles: []
  },
  {
    id: 11,
    title: 'Chapter 11',
    articles: []
  },
  {
    id: 12,
    title: 'Chapter 12',
    articles: []
  }
];

const articlesMock = chaptersMock.flatMap(chapter => {
  const articles = [];
  for (let i = 1; i <= 5; i++) {
    const article = {
      id: (chapter.id - 1) * 5 + i,
      title: `Article ${i}`,
      content: `This is the content of Article ${i}`
    };
    chapter.articles.push(article);
    articles.push(article);
  }
  return articles;
});

export default articlesMock;
