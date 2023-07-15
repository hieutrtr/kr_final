const chaptersMock = [
  {
    id: 1,
    title: 'Introduction to Object Oriented Programming',
    articles: [
      { id: 1, title: 'Introduction to Object Oriented Programming', content: 'Content for Introduction to Object Oriented Programming' },
      { id: 2, title: 'Classes and Objects', content: 'Content for Classes and Objects' },
      { id: 3, title: 'Inheritance and Polymorphism', content: 'Content for Inheritance and Polymorphism' },
      { id: 4, title: 'Encapsulation and Abstraction', content: 'Content for Encapsulation and Abstraction' },
      { id: 5, title: 'Interfaces and Abstract Classes', content: 'Content for Interfaces and Abstract Classes' }
    ]
  },
  {
    id: 2,
    title: 'Design Principles and Methodologies',
    articles: [
      { id: 6, title: 'Design Principles', content: 'Content for Design Principles' },
      { id: 7, title: 'Object-Oriented Analysis and Design', content: 'Content for Object-Oriented Analysis and Design' },
      { id: 8, title: 'Object-Oriented Modeling', content: 'Content for Object-Oriented Modeling' },
      { id: 9, title: 'Object-Oriented Programming Languages', content: 'Content for Object-Oriented Programming Languages' },
      { id: 10, title: 'Object-Oriented Design Patterns', content: 'Content for Object-Oriented Design Patterns' }
    ]
  },
  // ... rest of the chapters ...
];

const articlesMock = chaptersMock.flatMap(chapter => chapter.articles);

export { chaptersMock, articlesMock };
