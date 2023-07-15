const chaptersMock = [
  {
    id: 1,
    title: 'Chapter 1',
    articles: [
      {
        id: 1,
        title: 'Article 1'
      },
      {
        id: 2,
        title: 'Article 2'
      },
      {
        id: 3,
        title: 'Article 3'
      }
    ]
  },
  {
    id: 2,
    title: 'Chapter 2',
    articles: [
      {
        id: 4,
        title: 'Article 4'
      },
      {
        id: 5,
        title: 'Article 5'
      },
      {
        id: 6,
        title: 'Article 6'
      }
    ]
  }
];

const articlesMock = chaptersMock.flatMap(chapter => {
  return chapter.articles.map(article => {
    return {
      id: article.id,
      title: article.title,
      content: `This is the content of ${article.title}`
    };
  });
});

export default articlesMock;
