// entire file content ...

const sectionsMock = 
  [
    {
      "id": 1,
      "title": "Chương 7",
      "type": "chapter",
      "articles": [
        {
          "id": 0,
          "title": "QUAN HỆ THỪA KẾ",
        },
        {
          "id": 1,
          "title": "THIẾT KẾ CÂY THỪA KẾ",
        },
        {
          "id": 2,
          "title": "CÀI ĐỀ – PHƯƠNG THỨC NÀO ĐƯỢC GỌI?",
        },
        {
          "id": 3,
          "title": "CÁC QUAN HỆ IS-A VÀ HAS-A",
        },
        {
          "id": 4,
          "title": "KHI NÀO NÊN DÙNG QUAN HỆ THỪA KẾ?",
        },
        {
          "id": 5,
          "title": "LỢI ÍCH CỦA QUAN HỆ THỪA KẾ",
        },
        {
          "id": 6,
          "title": "ĐA HÌNH",
        },
        {
          "id": 7,
          "title": "GỌI PHIÊN BẢN PHƯƠNG THỨC CỦA LỚP CHA",
        },
        {
          "id": 8,
          "title": "CÁC QUY TẮC CHO VIỆC CÀI ĐÈ",
        },
        {
          "id": 9,
          "title": "CHỒNG PHƯƠNG THỨC",
        },
        {
          "id": 10,
          "title": "CÁC MỨC TRUY NHẬP",
        },
      ]
    },
    {
      "id": 2,
      "title": "Polymorphism in OOP",
      "type": "chapter",
      "articles": [
        {
          "id": 0,
          "title": "What is Polymorphism?",
          "category": "definition"
        },
        {
          "id": 1,
          "title": "Static and Dynamic Polymorphism",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Method Overloading and Overriding",
          "category": "concept"
        },
        {
          "id": 3,
          "title": "Real-world Examples of Polymorphism",
          "category": "example"
        }
      ]
    },
    {
      "id": 3,
      "title": "Encapsulation in OOP",
      "type": "chapter",
      "articles": [
        {
          "id": 0,
          "title": "What is Encapsulation?",
          "category": "definition"
        },
        {
          "id": 1,
          "title": "Access Modifiers",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Benefits of Encapsulation",
          "category": "concept"
        },
        {
          "id": 3,
          "title": "Encapsulation in Real-world Scenarios",
          "category": "example"
        }
      ]
    },
    {
      "id": 4,
      "title": "Abstraction in OOP",
      "type": "chapter",
      "articles": [
        {
          "id": 0,
          "title": "What is Abstraction?",
          "category": "definition"
        },
        {
          "id": 1,
          "title": "Abstract Classes and Interfaces",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Benefits and Usage of Abstraction",
          "category": "concept"
        },
        {
          "id": 3,
          "title": "Abstraction in Software Design",
          "category": "example"
        }
      ]
    },
    {
      "id": 5,
      "title": "Class in OOP",
      "type": "definition",
      "articles": [
        {
          "id": 0,
          "title": "What is a Class?",
          "category": "definition"
        },
        {
          "id": 1,
          "title": "Properties and Methods in a Class",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Class Relationships and Associations",
          "category": "concept"
        }
      ]
    },
    {
      "id": 6,
      "title": "Object in OOP",
      "type": "definition",
      "articles": [
        {
          "id": 0,
          "title": "What is an Object?",
          "category": "definition"
        },
        {
          "id": 1,
          "title": "State and Behavior of an Object",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Creating and Using Objects",
          "category": "concept"
        }
      ]
    },
    {
      "id": 7,
      "title": "Encapsulation in OOP",
      "type": "definition",
      "articles": [
        {
          "id": 0,
          "title": "What is Encapsulation?",
          "category": "definition"
        },
        {
          "id": 1,
          "title": "Data Hiding and Access Modifiers",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Encapsulation and Information Hiding",
          "category": "concept"
        }
      ]
    },
    {
      "id": 8,
      "title": "Inheritance in OOP",
      "type": "definition",
      "articles": [
        {
          "id": 0,
          "title": "What is Inheritance?",
          "category": "definition"
        },
        {
          "id": 1,
          "title": "Superclasses and Subclasses",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Inheritance and Code Reusability",
          "category": "concept"
        }
      ]
    },
    {
      "id": 9,
      "title": "Polymorphism in OOP",
      "type": "concept",
      "articles": [
        {
          "id": 0,
          "title": "What is Polymorphism?",
          "category": "concept"
        },
        {
          "id": 1,
          "title": "Static and Dynamic Polymorphism",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Method Overloading and Overriding",
          "category": "concept"
        }
      ]
    },
    {
      "id": 10,
      "title": "Abstraction in OOP",
      "type": "concept",
      "articles": [
        {
          "id": 0,
          "title": "What is Abstraction?",
          "category": "concept"
        },
        {
          "id": 1,
          "title": "Abstract Classes and Interfaces",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Benefits and Usage of Abstraction",
          "category": "concept"
        }
      ]
    },
    {
      "id": 11,
      "title": "Encapsulation in OOP",
      "type": "concept",
      "articles": [
        {
          "id": 0,
          "title": "What is Encapsulation?",
          "category": "concept"
        },
        {
          "id": 1,
          "title": "Access Modifiers",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Benefits of Encapsulation",
          "category": "concept"
        }
      ]
    },
    {
      "id": 12,
      "title": "Composition in OOP",
      "type": "concept",
      "articles": [
        {
          "id": 0,
          "title": "What is Composition?",
          "category": "concept"
        },
        {
          "id": 1,
          "title": "Composition vs. Inheritance",
          "category": "concept"
        },
        {
          "id": 2,
          "title": "Building Complex Objects using Composition",
          "category": "concept"
        }
      ]
    },
    {
      "id": 13,
      "title": "Class Design Exercise",
      "type": "exercise",
      "articles": [
        {
          "id": 0,
          "title": "Design a Class Hierarchy",
          "category": "exercise"
        },
        {
          "id": 1,
          "title": "Implement Class Methods and Attributes",
          "category": "exercise"
        },
        {
          "id": 2,
          "title": "Test and Refine Your Class Design",
          "category": "exercise"
        }
      ]
    },
    {
      "id": 14,
      "title": "Inheritance Exercise",
      "type": "exercise",
      "articles": [
        {
          "id": 0,
          "title": "Create a Subclass",
          "category": "exercise"
        },
        {
          "id": 1,
          "title": "Override Inherited Methods",
          "category": "exercise"
        },
        {
          "id": 2,
          "title": "Utilize Inheritance for Code Reusability",
          "category": "exercise"
        }
      ]
    },
    {
      "id": 15,
      "title": "Polymorphism Exercise",
      "type": "exercise",
      "articles": [
        {
          "id": 0,
          "title": "Implement Polymorphic Behavior",
          "category": "exercise"
        },
        {
          "id": 1,
          "title": "Demonstrate Method Overloading",
          "category": "exercise"
        },
        {
          "id": 2,
          "title": "Apply Dynamic Polymorphism",
          "category": "exercise"
        }
      ]
    },
    {
      "id": 16,
      "title": "Abstraction Exercise",
      "type": "exercise",
      "articles": [
        {
          "id": 0,
          "title": "Create Abstract Classes and Interfaces",
          "category": "exercise"
        },
        {
          "id": 1,
          "title": "Implement Abstract Methods",
          "category": "exercise"
        },
        {
          "id": 2,
          "title": "Utilize Abstraction in a Project",
          "category": "exercise"
        }
      ]
    }
  ];

export default sectionsMock;
