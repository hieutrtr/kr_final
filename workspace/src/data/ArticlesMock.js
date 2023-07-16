const articlesMock = [
  {
    id: 1,
    title: "Introduction to Object Oriented Programming",
    content: `
    <p>Object-oriented programming (OOP) is a programming paradigm that involves writing code directed toward modeling objects. This is one of many techniques used for describing the actions of complex systems. It is defined by describing a collection of interacting objects via their data and behavior.</p>
    
    <p>If you've read any hype, you've probably come across the terms object-oriented analysis, object-oriented design, object-oriented analysis and design, and object-oriented programming. These are all related concepts under the general object-oriented umbrella. In fact, analysis, design, and programming are all stages of software development. Calling them object-oriented simply specifies what kind of software development is being pursued.</p>
    
    <p>Object-oriented analysis (OOA) is the process of looking at a problem, system, or task (that somebody wants to turn into a working software application) and identifying the objects and interactions between those objects. The analysis stage is about understanding what should be done. Object-oriented design is about transforming what should be done into how it should be done, while object-oriented programming is about converting a design into a working program.</p>
    
    <p>Most 21st century development recognizes that this cascade (or waterfall) of stages doesn't work out well. What seems to be better is an iterative development model. In iterative development, a small part of the task is modeled, designed, and programmed, and then the product is reviewed and expanded to improve each feature and include new features in a series of short development cycles.</p>
    
    <p>The rest of this book is about object-oriented programming, but in this chapter, we will cover the basic object-oriented principles in the context of design. This allows us to understand concepts without having to argue with software syntax or Python tracebacks.</p>
    
    <p>An object is a collection of data with associated behaviors. How do we differentiate between types of objects? Apples and oranges are both objects, but it is a common adage that they cannot be compared. Apples and oranges aren't modeled very often in computer programming, but let's pretend we're doing an inventory application.</p>
    
    <p>The Python programming language is extremely popular and used for a variety of applications. The Python language is designed to make it relatively easy to create small programs. To create more sophisticated software, we need to acquire a number of important programming and software design skills.</p>
    
    <p>This book describes the object-oriented approach to creating programs in Python. It introduces the terminology of object-oriented programming, demonstrating software design and Python programming through step-by-step examples. It describes how to make use of inheritance and composition to build software from individual elements. It shows how to use Python's built-in exceptions and data structures, as well as elements of the Python standard library. A number of common design patterns are described with detailed examples.</p>
    
    <p>This book covers how to write automated tests to confirm that our software works. It also shows how to use the various concurrency libraries available as part of the Python standard library.</p>
    `
  },
  {
    id: 2,
    title: "Classes and Objects",
    content: "In OOP, a class is a blueprint for creating objects. An object is an instance of a class. Classes define the properties and behaviors of objects."
  },
  // ... continue defining the remaining 58 articles ...
  {
    id: 60,
    title: "Conclusion",
    content: "In this course, we covered the fundamentals of Object Oriented Programming. We explored the concepts of classes, objects, inheritance, and polymorphism. With this knowledge, you can now start building more complex and modular applications using OOP principles."
  }
];

export default articlesMock;
