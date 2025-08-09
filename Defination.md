
---

# Design Patterns

## 1. Definition
A **Design Pattern** is a reusable solution to a common problem in software design.  
They are **proven templates** for solving recurring design issues.

---

## 2. Benefits
- Reusability
- Maintainability
- Improves communication between developers (shared vocabulary)
- Reduces development time

---

## 3. Types of Design Patterns

### **A) Creational Patterns**
Focus on **object creation**.

| Pattern | Description | Java Example | JavaScript Example |
|---------|-------------|--------------|--------------------|
| **Singleton** | Ensures only **one instance** exists | 
```java
class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) instance = new Singleton();
        return instance;
    }
}
``` |
```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) return Singleton.instance;
        Singleton.instance = this;
    }
}
const s1 = new Singleton();
const s2 = new Singleton();
console.log(s1 === s2); // true
````

\| **Factory Method** | Creates objects without exposing the creation logic |

````java
interface Shape { void draw(); }
class Circle implements Shape { public void draw(){ System.out.println("Circle"); } }
class ShapeFactory {
    Shape getShape(String type) {
        if(type.equals("circle")) return new Circle();
        return null;
    }
}
``` |
```javascript
class ShapeFactory {
    getShape(type) {
        if (type === "circle") return { draw: () => console.log("Circle") };
    }
}
````

---

### **B) Structural Patterns**

Focus on **class and object composition**.

| Pattern       | Description                                        | Example                    |
| ------------- | -------------------------------------------------- | -------------------------- |
| **Adapter**   | Converts one interface to another                  | USB-to-HDMI converter      |
| **Decorator** | Adds new functionality dynamically                 | Adding logging to a method |
| **Facade**    | Provides a simplified interface to complex systems | API wrapper class          |

---

### **C) Behavioral Patterns**

Focus on **communication** between objects.

| Pattern      | Description                                                        | Example                   |
| ------------ | ------------------------------------------------------------------ | ------------------------- |
| **Observer** | One-to-many dependency; updates all observers when subject changes | Event listeners in JS     |
| **Strategy** | Defines a family of algorithms and makes them interchangeable      | Payment methods selection |
| **Command**  | Encapsulates a request as an object                                | Undo/Redo system          |

---

## 4. Example – Observer Pattern (JavaScript)

```javascript
class Subject {
    constructor() { this.observers = []; }
    subscribe(observer) { this.observers.push(observer); }
    notify(data) { this.observers.forEach(o => o.update(data)); }
}

class Observer {
    update(data) { console.log("Received:", data); }
}

const subject = new Subject();
const obs1 = new Observer();
subject.subscribe(obs1);
subject.notify("Hello Observers!");
```

---

## 5. Key Notes

* **Creational** → Object creation (Singleton, Factory, Builder, Prototype).
* **Structural** → Class/object composition (Adapter, Decorator, Facade, Composite).
* **Behavioral** → Communication & interaction (Observer, Strategy, Command, State).

---

## 6. Interview Tip

* **Always start** with problem → pattern → example.
* Avoid **overusing** patterns — can cause complexity (pattern over-engineering).

```

---

