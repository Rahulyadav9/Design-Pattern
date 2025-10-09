---

## 🧩 What is SOLID?

**SOLID** is an acronym for 5 design principles that help you write **clean, maintainable, and scalable** code.

| Letter | Principle                 | Purpose                                             |
| ------ | ------------------------- | --------------------------------------------------- |
| S      | **Single Responsibility** | A class should have only one reason to change       |
| O      | **Open/Closed**           | Open for extension, closed for modification         |
| L      | **Liskov Substitution**   | Subclasses should be substitutable for base classes |
| I      | **Interface Segregation** | Don’t force classes to depend on unused interfaces  |
| D      | **Dependency Inversion**  | Depend on abstractions, not concretions             |

---

## 🔹 1. Single Responsibility Principle (SRP)

> A class should do **only one thing** and have **one reason to change**.

### ❌ Bad Example

```js
class User {
  createUser(user) {
    // logic to create user
  }

  sendEmail(user) {
    // logic to send email
  }
}
```

➡️ This class handles **both user creation** and **email sending**, violating SRP.

---

### ✅ Good Example

```js
class User {
  createUser(user) {
    console.log("User created:", user);
  }
}

class EmailService {
  sendEmail(user) {
    console.log(`Email sent to ${user.email}`);
  }
}

// Usage
const user = new User();
const email = new EmailService();
user.createUser({ name: "Rahul", email: "rahul@gmail.com" });
email.sendEmail({ email: "rahul@gmail.com" });
```

✅ Each class has a **single responsibility**.

---

## 🔹 2. Open/Closed Principle (OCP)

> Software entities should be **open for extension**, but **closed for modification**.

### ❌ Bad Example

```js
class Payment {
  pay(type) {
    if (type === "paypal") console.log("Paying with PayPal");
    else if (type === "creditcard") console.log("Paying with Credit Card");
  }
}
```

➡️ You must **modify the existing class** whenever a new payment type is added.

---

### ✅ Good Example

```js
class Payment {
  pay() {}
}

class PayPalPayment extends Payment {
  pay() {
    console.log("Paying with PayPal");
  }
}

class CreditCardPayment extends Payment {
  pay() {
    console.log("Paying with Credit Card");
  }
}

// Usage
const payments = [new PayPalPayment(), new CreditCardPayment()];
payments.forEach(p => p.pay());
```

✅ You can **extend** functionality (add new payment types) **without modifying existing code**.

---

## 🔹 3. Liskov Substitution Principle (LSP)

> Subclasses should be **replaceable** for their parent classes without breaking behavior.

### ❌ Bad Example

```js
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can’t fly");
  }
}
```

➡️ Substituting `Bird` with `Penguin` **breaks the program**.

---

### ✅ Good Example

```js
class Bird {
  move() {
    console.log("Moving");
  }
}

class Sparrow extends Bird {
  move() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  move() {
    console.log("Swimming");
  }
}

// Usage
const birds = [new Sparrow(), new Penguin()];
birds.forEach(b => b.move());
```

✅ Subclasses behave consistently with the parent class expectations.

---

## 🔹 4. Interface Segregation Principle (ISP)

> A class shouldn’t be forced to implement **interfaces it doesn’t use**.

### ❌ Bad Example

```js
class Worker {
  work() {}
  eat() {}
}

class Robot extends Worker {
  eat() {
    throw new Error("Robots don’t eat");
  }
}
```

➡️ `Robot` is forced to implement `eat()` — which it doesn’t need.

---

### ✅ Good Example

```js
class Workable {
  work() {}
}

class Eatable {
  eat() {}
}

class Human extends Workable {
  work() {
    console.log("Working");
  }
  eat() {
    console.log("Eating");
  }
}

class Robot extends Workable {
  work() {
    console.log("Working continuously");
  }
}
```

✅ Split large interfaces into smaller, specific ones.

---

## 🔹 5. Dependency Inversion Principle (DIP)

> High-level modules should **not depend on low-level modules**.
> Both should depend on **abstractions**.

### ❌ Bad Example

```js
class MySQL {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService {
  constructor() {
    this.db = new MySQL();
  }
  getUser() {
    this.db.connect();
  }
}
```

➡️ `UserService` is **tightly coupled** to MySQL.

---

### ✅ Good Example

```js
class Database {
  connect() {}
}

class MySQL extends Database {
  connect() {
    console.log("Connected to MySQL");
  }
}

class MongoDB extends Database {
  connect() {
    console.log("Connected to MongoDB");
  }
}

class UserService {
  constructor(db) {
    this.db = db;
  }

  getUser() {
    this.db.connect();
  }
}

// Usage
const userService = new UserService(new MongoDB());
userService.getUser();
```

✅ `UserService` depends on the **abstraction (`Database`)**, not the implementation.
You can switch from MySQL to MongoDB easily.

---

## 🧠 Summary Table

| Principle | Meaning                           | Example                      |
| --------- | --------------------------------- | ---------------------------- |
| **S**     | One responsibility per class      | User ↔ EmailService          |
| **O**     | Extend, don’t modify              | Add new Payment types        |
| **L**     | Subclasses replace parents safely | Bird ↔ Penguin               |
| **I**     | No forced unused methods          | Workable vs Eatable          |
| **D**     | Depend on abstraction             | DB interface ↔ MySQL/MongoDB |

---
