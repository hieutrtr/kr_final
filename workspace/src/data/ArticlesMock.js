const articlesMock = [
  {
    "id": 0,
    "chapter": "Introduction to OOP",
    "title": "What is Object-Oriented Programming?",
    "content": "<p>Object-Oriented Programming (OOP) is a programming paradigm that organizes data and behavior into reusable structures called objects. It focuses on modeling real-world entities and their interactions using classes, objects, inheritance, and polymorphism.</p><p>OOP provides a way to design software systems that are modular, maintainable, and scalable. It offers several key features, including encapsulation, inheritance, and polymorphism, which contribute to code reusability, extensibility, and flexibility.</p><p>By encapsulating data and methods within objects, OOP promotes the concept of data hiding and abstraction, enabling better code organization and reducing complexity. Inheritance allows classes to inherit properties and behaviors from other classes, facilitating code reuse and promoting the principle of code modularity. Polymorphism enables objects to take on different forms, allowing flexibility and extensibility in handling different types of objects.</p>",
    "category": "definition"
  },
  {
    "id": 1,
    "chapter": "Introduction to OOP",
    "title": "Key Concepts of OOP",
    "content": "<p>Object-Oriented Programming (OOP) is based on several key concepts:</p><ol><li><strong>Classes and Objects:</strong> Classes are the blueprints that define the structure and behavior of objects. Objects are instances of classes that represent specific entities or things.</li><li><strong>Inheritance:</strong> Inheritance allows classes to inherit properties and behaviors from parent classes, forming a hierarchy of classes. It promotes code reuse and facilitates the creation of specialized classes.</li><li><strong>Encapsulation:</strong> Encapsulation refers to the bundling of data and methods within a class, hiding internal details and exposing only necessary interfaces. It protects data integrity and promotes modular design.</li><li><strong>Polymorphism:</strong> Polymorphism allows objects of different types to be treated as objects of a common superclass. It enables flexibility in handling different types of objects through method overriding and method overloading.</li><li><strong>Abstraction:</strong> Abstraction focuses on capturing essential properties and behaviors of objects while hiding unnecessary implementation details. It simplifies complex systems and promotes a higher-level perspective.</li></ol>",
    "category": "concept"
  },
  {
    "id": 2,
    "chapter": "Introduction to OOP",
    "title": "OOP Exercises",
    "content": "<p>Exercise 1: Create a class called 'Rectangle' that represents a rectangle object. Include attributes such as 'width' and 'height', as well as methods to calculate the area and perimeter of the rectangle.</p><p>Exercise 2: Implement a class hierarchy for different types of vehicles. Include a base class called 'Vehicle' and derived classes such as 'Car', 'Motorcycle', and 'Truck'. Define appropriate attributes and methods for each class.</p><p>Exercise 3: Develop a simple banking system using OOP principles. Create classes for 'Account', 'Customer', and 'Bank'. Implement methods for opening accounts, depositing and withdrawing money, and transferring funds between accounts.</p>",
    "category": "exercise"
  },
  {
    "id": 3,
    "chapter": "Inheritance",
    "title": "Understanding Inheritance in OOP",
    "content": "<p>Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows classes to inherit properties and behaviors from parent classes. It enables code reuse and promotes the creation of specialized classes based on existing ones.</p><p>Inheritance establishes a hierarchical relationship between classes, where a child class (also known as a derived class or subclass) can inherit attributes and methods from a parent class (also known as a base class or superclass). The child class can then extend or modify the inherited features and add new ones specific to its own requirements.</p><p>By using inheritance, developers can create a more organized and modular codebase. Common properties and behaviors can be defined in a base class and shared among multiple derived classes, reducing redundancy and promoting code maintenance. Inheritance also supports the principle of polymorphism, allowing objects of different classes to be treated interchangeably.</p>",
    "category": "definition"
  },
  {
    "id": 4,
    "chapter": "Inheritance",
    "title": "Types of Inheritance",
    "content": "<p>Inheritance in Object-Oriented Programming (OOP) can be classified into several types:</p><ol><li><strong>Single Inheritance:</strong> In single inheritance, a class inherits from a single parent class. The child class extends the parent class and inherits its properties and behaviors.</li><li><strong>Multiple Inheritance:</strong> Multiple inheritance refers to a class inheriting from two or more parent classes. The child class combines the properties and behaviors of all the parent classes.</li><li><strong>Multilevel Inheritance:</strong> Multilevel inheritance involves a chain of inheritance, where a child class becomes the parent class for another class. It forms a hierarchy of classes.</li><li><strong>Hierarchical Inheritance:</strong> Hierarchical inheritance occurs when multiple child classes inherit from a single parent class. Each child class can have its own specialized properties and behaviors.</li><li><strong>Hybrid Inheritance:</strong> Hybrid inheritance is a combination of two or more types of inheritance. It involves the use of multiple inheritance along with other types.</li></ol>",
    "category": "concept"
  },
  {
    "id": 5,
    "chapter": "Inheritance",
    "title": "Inheritance Exercises",
    "content": "<p>Exercise 1: Create a base class called 'Animal' with attributes like 'name' and 'age'. Derive different classes such as 'Dog', 'Cat', and 'Bird' from the 'Animal' class, each with their specific properties and methods.</p><p>Exercise 2: Implement a class hierarchy for a university system. Define a base class called 'Person' and derived classes such as 'Student', 'Professor', and 'Staff'. Include appropriate attributes and methods for each class.</p><p>Exercise 3: Develop a game using inheritance. Create a base class called 'Character' and derived classes for different types of characters, such as 'Warrior', 'Mage', and 'Archer'. Implement specific abilities and actions for each character type.</p>",
    "category": "exercise"
  },
  {
    "id": 6,
    "chapter": "Polymorphism",
    "title": "Polymorphism Explained",
    "content": "<p>Polymorphism is a core concept in Object-Oriented Programming (OOP) that allows objects of different types to be treated as objects of a common superclass. It provides flexibility and extensibility in handling different types of objects through a unified interface.</p><p>In OOP, polymorphism enables a single interface (such as a method or function) to be used for objects of different classes. This means that objects can exhibit different behaviors based on their actual types or characteristics. Polymorphism is achieved through method overriding and method overloading.</p><p>Method overriding occurs when a subclass provides its own implementation of a method that is already defined in its parent class. The method in the subclass overrides the behavior of the same method in the parent class, allowing the subclass to provide a specialized implementation.</p><p>Method overloading, on the other hand, involves defining multiple methods in a class with the same name but different parameters. The appropriate method is called based on the number, type, and order of the arguments provided during the method invocation. This allows flexibility in accepting different inputs and performing different actions based on the provided arguments.</p><p>Polymorphism promotes code reuse, modularity, and flexibility. It allows developers to write more generic and scalable code that can handle a variety of objects without the need for extensive conditional logic or type checking.</p>",
    "category": "definition"
  },
  {
    "id": 7,
    "chapter": "Polymorphism",
    "title": "Implementing Polymorphism",
    "content": "<p>Polymorphism in Object-Oriented Programming (OOP) can be implemented through method overriding and method overloading.</p><p>Method overriding occurs when a subclass provides its own implementation of a method that is already defined in its parent class. To override a method, the subclass must declare a method with the same name, return type, and parameter list as the method in the parent class. The overridden method in the subclass can provide a specialized implementation specific to the subclass's needs.</p><p>Method overloading involves defining multiple methods in a class with the same name but different parameters. The methods can have different numbers, types, or order of parameters. During method invocation, the appropriate method is determined based on the arguments provided. Overloaded methods allow a class to provide multiple ways of performing a similar operation based on different input scenarios.</p><p>By leveraging method overriding and method overloading, developers can utilize polymorphism to write more flexible and reusable code. Polymorphism allows objects of different classes to be treated uniformly, enhancing code modularity and simplifying system design.</p>",
    "category": "concept"
  },
  {
    "id": 8,
    "chapter": "Polymorphism",
    "title": "Polymorphism Exercises",
    "content": "<p>Exercise 1: Create a base class called 'Shape' with a method called 'calculateArea()'. Derive classes such as 'Rectangle', 'Circle', and 'Triangle' from the 'Shape' class and override the 'calculateArea()' method in each subclass to provide the specific area calculation logic for each shape.</p><p>Exercise 2: Implement a class hierarchy for a drawing application. Create a base class called 'Shape' with methods like 'draw()' and 'resize()'. Derive classes such as 'Rectangle', 'Circle', and 'Line' from the 'Shape' class and provide specialized implementations for the 'draw()' and 'resize()' methods in each subclass.</p><p>Exercise 3: Develop a payroll system using polymorphism. Create a base class called 'Employee' with attributes like 'name' and 'salary'. Derive classes such as 'Manager', 'Engineer', and 'Salesperson' from the 'Employee' class. Implement a method called 'calculateBonus()' in each subclass to calculate the bonus amount based on specific rules for each employee category.</p>",
    "category": "exercise"
  },
  {
    "id": 9,
    "chapter": "Encapsulation",
    "title": "Understanding Encapsulation in OOP",
    "content": "<p>Encapsulation is a principle in Object-Oriented Programming (OOP) that involves bundling data and methods together within a class and controlling access to them through well-defined interfaces. It allows the internal details of an object to be hidden from the outside world, promoting information hiding and reducing complexity.</p><p>Encapsulation provides several benefits:</p><ul><li><strong>Data Protection:</strong> By encapsulating data within a class, direct access to the data from external sources is restricted. This helps maintain data integrity and prevents unwanted modification.</li><li><strong>Code Organization:</strong> Encapsulation allows related data and methods to be grouped together within a class, providing a clean and modular structure. This promotes code organization, making it easier to understand and maintain.</li><li><strong>Abstraction:</strong> Encapsulation allows objects to expose only necessary information and functionality to external entities, promoting a higher-level perspective and hiding unnecessary implementation details.</li></ul><p>Encapsulation is often achieved through the use of access modifiers such as public, private, and protected. Public members are accessible from any part of the program, private members are only accessible within the class itself, and protected members are accessible within the class and its subclasses.</p>",
    "category": "concept"
  },
  {
    "id": 10,
    "chapter": "Encapsulation",
    "title": "Benefits of Encapsulation",
    "content": "<p>Encapsulation, as a fundamental principle in Object-Oriented Programming (OOP), provides several benefits:</p><ul><li><strong>Data Protection:</strong> By encapsulating data within a class, direct access to the data from external sources is restricted. This helps maintain data integrity and prevents unwanted modification.</li><li><strong>Code Organization:</strong> Encapsulation allows related data and methods to be grouped together within a class, providing a clean and modular structure. This promotes code organization, making it easier to understand and maintain.</li><li><strong>Abstraction:</strong> Encapsulation allows objects to expose only necessary information and functionality to external entities, promoting a higher-level perspective and hiding unnecessary implementation details.</li><li><strong>Flexibility and Extensibility:</strong> Encapsulation facilitates changes to the internal implementation of a class without affecting other parts of the program. It provides a well-defined interface for interaction with the object, enabling flexibility and extensibility.</li><li><strong>Security:</strong> By encapsulating data and providing controlled access through methods, encapsulation enhances security by preventing unauthorized access and manipulation of sensitive information.</li></ul><p>Overall, encapsulation promotes code reusability, maintainability, and scalability by enforcing proper data access and abstraction.</p>",
    "category": "concept"
  },
  {
    "id": 11,
    "chapter": "Encapsulation",
    "title": "Encapsulation Exercises",
    "content": "<p>Exercise 1: Create a class called 'BankAccount' that encapsulates the account balance as a private attribute. Provide methods to deposit and withdraw funds from the account, ensuring that the balance remains protected and proper validation is performed.</p><p>Exercise 2: Implement a class called 'Employee' with private attributes such as 'name' and 'salary'. Encapsulate these attributes and provide methods to set and get their values. Additionally, create a method to calculate the annual bonus based on the employee's salary.</p><p>Exercise 3: Develop a class called 'Car' that encapsulates the car's internal state, such as speed, engine status, and fuel level. Provide methods to start the engine, accelerate, and refuel the car, ensuring that proper checks and validations are performed to maintain the integrity of the car's state.</p>",
    "category": "exercise"
  }
];

export default articlesMock;
