---

## 🔹 **Types of Design Patterns**

Design patterns are broadly categorized into **three main types**:

---

### 🧱 1. **Creational Patterns**

➡️ Focus: Object creation mechanisms — how objects are created and managed.

| Pattern              | Description                                                                                            | Example (JavaScript/Node.js)                  |
| -------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| **Singleton**        | Ensures only **one instance** of a class exists.                                                       | `DB connection`, `Logger`  ```jsclass Database {
  constructor() {
    if (Database.instance) return Database.instance;
    this.connection = "Connected to MongoDB";
    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true → only one instance
```                   |
| **Factory Method**   | Defines an **interface** for creating an object but lets subclasses decide which class to instantiate. | Payment Gateway (`PayPal`, `Stripe`)          |
| **Abstract Factory** | Factory of factories — produces families of related objects.                                           | UI components for dark/light theme            |
| **Builder**          | Separates object **construction from representation**.                                                 | Building a complex `User` object step by step |
| **Prototype**        | Creates new objects by **cloning existing ones**.                                                      | Cloning a `config` object                     |

---

### ⚙️ 2. **Structural Patterns**

➡️ Focus: How classes and objects are **composed** to form larger structures.

| Pattern       | Description                                                               | Example                                        |
| ------------- | ------------------------------------------------------------------------- | ---------------------------------------------- |
| **Adapter**   | Converts the **interface** of one class into another expected by clients. | Adapting an old API response to a new format   |
| **Bridge**    | Decouples abstraction from implementation.                                | Separate `Device` from `RemoteControl` classes |
| **Composite** | Treats a group of objects as a single object.                             | File system (Folder → contains files/folders)  |
| **Decorator** | Dynamically **adds behavior** to objects.                                 | Middleware chaining in Express.js              |
| **Facade**    | Provides a **simple interface** to a complex subsystem.                   | Wrapper around AWS SDK                         |
| **Flyweight** | Reduces memory usage by **sharing** common data.                          | Caching repeated objects                       |
| **Proxy**     | Provides a **surrogate** or placeholder for another object.               | Authentication/Rate-limiting proxy             |

---

### 🔁 3. **Behavioral Patterns**

➡️ Focus: How objects **communicate** and **interact** with each other.

| Pattern                     | Description                                                                      | Example                        |
| --------------------------- | -------------------------------------------------------------------------------- | ------------------------------ |
| **Observer**                | One-to-many dependency — when one object changes, others get notified.           | EventEmitter in Node.js        |
| **Strategy**                | Encapsulates different algorithms and lets them be **interchanged**.             | Payment or Sorting strategy    |
| **Command**                 | Encapsulates a request as an object.                                             | Undo/Redo functionality        |
| **Iterator**                | Sequentially access elements without exposing underlying structure.              | Custom iterable objects        |
| **Mediator**                | Defines an object that **coordinates communication** between others.             | Chatroom mediator              |
| **State**                   | Object changes its behavior based on its **internal state**.                     | Traffic light, order states    |
| **Chain of Responsibility** | Pass request through a chain of handlers.                                        | Express.js middleware          |
| **Template Method**         | Defines the **skeleton** of an algorithm, allowing subclasses to override steps. | Abstract data processing class |
| **Visitor**                 | Adds new operations to existing object structures.                               | Operations on syntax trees     |

---

## ⚡ Example: **Singleton Pattern (Node.js)**

```js
// logger.js
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log("LOG:", message);
  }
}

module.exports = new Logger();
```

```js
// app.js
const logger1 = require("./logger");
const logger2 = require("./logger");

logger1.log("App started");
logger2.log("App running...");

console.log(logger1 === logger2); // true
```

---

## 🧩 Why Use Design Patterns?

✅ Reusable solutions
✅ Improve code readability and maintainability
✅ Reduce development time
✅ Enhance scalability and flexibility
✅ Promote good object-oriented design principles (SOLID)

---

Would you like me to share **visual diagrams + real-world examples in JavaScript** for each pattern (like Singleton, Factory, Observer, etc.)?
That would make it easier to **grasp practically**.
