const articlesMock = [
  {
    "id": 0,
    "chapter": "Introduction to OOP",
    "title": "What is Object-Oriented Programming?",
    "content": "<p>Object-Oriented Programming (OOP) is a programming paradigm that organizes data and behavior into reusable structures called objects. It focuses on modeling real-world entities and their interactions using classes, objects, inheritance, and polymorphism.</p><p>OOP provides a way to design software systems that are modular, maintainable, and scalable. It offers several key features, including encapsulation, inheritance, and polymorphism, which contribute to code reusability, extensibility, and flexibility.</p><p>By encapsulating data and methods within objects, OOP promotes the concept of data hiding and abstraction, enabling better code organization and reducing complexity. Inheritance allows classes to inherit properties and behaviors from other classes, facilitating code reuse and promoting the principle of code modularity. Polymorphism enables objects to take on different forms, allowing flexibility and extensibility in handling different types of objects.</p>",
    "category": "definition",
    "featured": true
  },
  {
    "id": 1,
    "chapter": "Introduction to OOP",
    "title": "Key Concepts of OOP",
    "content": "<p>Object-Oriented Programming (OOP) is based on several key concepts:</p><ol><li><strong>Classes and Objects:</strong> Classes are the blueprints that define the structure and behavior of objects. Objects are instances of classes that represent specific entities or things.</li><li><strong>Inheritance:</strong> Inheritance allows classes to inherit properties and behaviors from parent classes, forming a hierarchy of classes. It promotes code reuse and facilitates the creation of specialized classes.</li><li><strong>Encapsulation:</strong> Encapsulation refers to the bundling of data and methods within a class, hiding internal details and exposing only necessary interfaces. It protects data integrity and promotes modular design.</li><li><strong>Polymorphism:</strong> Polymorphism allows objects of different types to be treated as objects of a common superclass. It enables flexibility in handling different types of objects through method overriding and method overloading.</li><li><strong>Abstraction:</strong> Abstraction focuses on capturing essential properties and behaviors of objects while hiding unnecessary implementation details. It simplifies complex systems and promotes a higher-level perspective.</li></ol>",
    "category": "concept",
    "featured": true
  },
  {
    "id": 2,
    "chapter": "Introduction to OOP",
    "title": "OOP Exercises",
    "content": "<p>Exercise 1: Create a class called 'Rectangle' that represents a rectangle object. Include attributes such as 'width' and 'height', as well as methods to calculate the area and perimeter of the rectangle.</p><p>Exercise 2: Implement a class hierarchy for different types of vehicles. Include a base class called 'Vehicle' and derived classes such as 'Car', 'Motorcycle', and 'Truck'. Define appropriate attributes and methods for each class.</p><p>Exercise 3: Develop a simple banking system using OOP principles. Create classes for 'Account', 'Customer', and 'Bank'. Implement methods for opening accounts, depositing and withdrawing money, and transferring funds between accounts.</p>",
    "category": "exercise",
    "featured": false
  },
  // Add more articles with "featured" property set to true or false
];

export default articlesMock;
