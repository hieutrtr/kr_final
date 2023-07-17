const sectionsMock = [
  {
    "id": 0,
    "title": "Introduction to OOP",
    "type": "chapter",
    "articles": [
      {
        "id": 0,
        "title": "What is Object-Oriented Programming?",
        "category": "definition"
      },
      {
        "id": 1,
        "title": "Key Concepts of OOP",
        "category": "concept"
      },
      {
        "id": 2,
        "title": "OOP Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 1,
    "title": "Inheritance",
    "type": "chapter",
    "articles": [
      {
        "id": 3,
        "title": "Understanding Inheritance in OOP",
        "category": "definition"
      },
      {
        "id": 4,
        "title": "Types of Inheritance",
        "category": "concept"
      },
      {
        "id": 5,
        "title": "Inheritance Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 2,
    "title": "Polymorphism",
    "type": "chapter",
    "articles": [
      {
        "id": 6,
        "title": "Polymorphism Explained",
        "category": "definition"
      },
      {
        "id": 7,
        "title": "Implementing Polymorphism",
        "category": "concept"
      },
      {
        "id": 8,
        "title": "Polymorphism Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 3,
    "title": "Encapsulation",
    "type": "chapter",
    "articles": [
      {
        "id": 9,
        "title": "Understanding Encapsulation in OOP",
        "category": "definition"
      },
      {
        "id": 10,
        "title": "Benefits of Encapsulation",
        "category": "concept"
      },
      {
        "id": 11,
        "title": "Encapsulation Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 4,
    "title": "Abstraction",
    "type": "chapter",
    "articles": [
      {
        "id": 12,
        "title": "What is Abstraction in OOP?",
        "category": "definition"
      },
      {
        "id": 13,
        "title": "Using Abstraction in Practice",
        "category": "concept"
      },
      {
        "id": 14,
        "title": "Abstraction Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 5,
    "title": "Encapsulation",
    "type": "chapter",
    "articles": [
      {
        "id": 15,
        "title": "Understanding Encapsulation in OOP",
        "category": "definition"
      },
      {
        "id": 16,
        "title": "Benefits of Encapsulation",
        "category": "concept"
      },
      {
        "id": 17,
        "title": "Encapsulation Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 6,
    "title": "Polymorphism",
    "type": "chapter",
    "articles": [
      {
        "id": 18,
        "title": "Polymorphism Explained",
        "category": "definition"
      },
      {
        "id": 19,
        "title": "Implementing Polymorphism",
        "category": "concept"
      },
      {
        "id": 20,
        "title": "Polymorphism Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 7,
    "title": "Inheritance",
    "type": "chapter",
    "articles": [
      {
        "id": 21,
        "title": "Understanding Inheritance in OOP",
        "category": "definition"
      },
      {
        "id": 22,
        "title": "Types of Inheritance",
        "category": "concept"
      },
      {
        "id": 23,
        "title": "Inheritance Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 8,
    "title": "Encapsulation",
    "type": "chapter",
    "articles": [
      {
        "id": 24,
        "title": "Understanding Encapsulation in OOP",
        "category": "definition"
      },
      {
        "id": 25,
        "title": "Benefits of Encapsulation",
        "category": "concept"
      },
      {
        "id": 26,
        "title": "Encapsulation Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 9,
    "title": "Abstraction",
    "type": "chapter",
    "articles": [
      {
        "id": 27,
        "title": "What is Abstraction in OOP?",
        "category": "definition"
      },
      {
        "id": 28,
        "title": "Using Abstraction in Practice",
        "category": "concept"
      },
      {
        "id": 29,
        "title": "Abstraction Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 10,
    "title": "Polymorphism",
    "type": "chapter",
    "articles": [
      {
        "id": 30,
        "title": "Polymorphism Explained",
        "category": "definition"
      },
      {
        "id": 31,
        "title": "Implementing Polymorphism",
        "category": "concept"
      },
      {
        "id": 32,
        "title": "Polymorphism Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 11,
    "title": "Inheritance",
    "type": "chapter",
    "articles": [
      {
        "id": 33,
        "title": "Understanding Inheritance in OOP",
        "category": "definition"
      },
      {
        "id": 34,
        "title": "Types of Inheritance",
        "category": "concept"
      },
      {
        "id": 35,
        "title": "Inheritance Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 12,
    "title": "Encapsulation",
    "type": "chapter",
    "articles": [
      {
        "id": 36,
        "title": "Understanding Encapsulation in OOP",
        "category": "definition"
      },
      {
        "id": 37,
        "title": "Benefits of Encapsulation",
        "category": "concept"
      },
      {
        "id": 38,
        "title": "Encapsulation Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 13,
    "title": "Abstraction",
    "type": "chapter",
    "articles": [
      {
        "id": 39,
        "title": "What is Abstraction in OOP?",
        "category": "definition"
      },
      {
        "id": 40,
        "title": "Using Abstraction in Practice",
        "category": "concept"
      },
      {
        "id": 41,
        "title": "Abstraction Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 14,
    "title": "Polymorphism",
    "type": "chapter",
    "articles": [
      {
        "id": 42,
        "title": "Polymorphism Explained",
        "category": "definition"
      },
      {
        "id": 43,
        "title": "Implementing Polymorphism",
        "category": "concept"
      },
      {
        "id": 44,
        "title": "Polymorphism Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 15,
    "title": "Inheritance",
    "type": "chapter",
    "articles": [
      {
        "id": 45,
        "title": "Understanding Inheritance in OOP",
        "category": "definition"
      },
      {
        "id": 46,
        "title": "Types of Inheritance",
        "category": "concept"
      },
      {
        "id": 47,
        "title": "Inheritance Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 16,
    "title": "Encapsulation",
    "type": "chapter",
    "articles": [
      {
        "id": 48,
        "title": "Understanding Encapsulation in OOP",
        "category": "definition"
      },
      {
        "id": 49,
        "title": "Benefits of Encapsulation",
        "category": "concept"
      },
      {
        "id": 50,
        "title": "Encapsulation Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 17,
    "title": "Abstraction",
    "type": "chapter",
    "articles": [
      {
        "id": 51,
        "title": "What is Abstraction in OOP?",
        "category": "definition"
      },
      {
        "id": 52,
        "title": "Using Abstraction in Practice",
        "category": "concept"
      },
      {
        "id": 53,
        "title": "Abstraction Exercises",
        "category": "exercise"
      }
    ]
  },
  {
    "id": 18,
    "title": "Polymorphism",
    "type": "chapter",
    "articles": [
      {
        "id": 54,
        "title": "Polymorphism Explained",
        "category": "definition"
      },
      {
        "id": 55,
        "title": "Implementing Polymorphism",
        "category": "concept"
      },
      {
        "id": 56,
        "title": "Polymorphism Exercises",
        "category": "exercise"
      }
    ]
  }
];

export default sectionsMock;
