const chaptersMock = [
  {
    id: 1,
    title: 'Introduction to Object Oriented Programming',
    articles: [
      { id: 1, title: 'Introduction to Object Oriented Programming', content: articlesMock[0] },
      { id: 2, title: 'Classes and Objects', content: articlesMock[1] },
      { id: 3, title: 'Inheritance and Polymorphism', content: articlesMock[2] },
      { id: 4, title: 'Encapsulation and Abstraction', content: articlesMock[3] },
      { id: 5, title: 'Interfaces and Abstract Classes', content: articlesMock[4] }
    ]
  },
  {
    id: 2,
    title: 'Design Principles and Methodologies',
    articles: [
      { id: 6, title: 'Design Principles', content: articlesMock[5] },
      { id: 7, title: 'Object-Oriented Analysis and Design', content: articlesMock[6] },
      { id: 8, title: 'Object-Oriented Modeling', content: articlesMock[7] },
      { id: 9, title: 'Object-Oriented Programming Languages', content: articlesMock[8] },
      { id: 10, title: 'Object-Oriented Design Patterns', content: articlesMock[9] }
    ]
  },
  // ... rest of the chapters ...
];

export default chaptersMock;
