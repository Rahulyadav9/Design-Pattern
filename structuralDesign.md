
Here is a **clean, simple, interview-ready explanation of Structural Design Patterns** with **real-world JavaScript examples** 👇

---

# 🏗️ **Structural Design Patterns**

Structural patterns help you **organize classes/objects** and define **relationships** between them to create flexible, maintainable code.

They solve problems like:

* Wrapping objects
* Simplifying complex structures
* Controlling access
* Making incompatible APIs work together

---

# 🔥 **7 Structural Design Patterns**

1. Adapter
2. Facade
3. Decorator
4. Proxy
5. Composite
6. Bridge
7. Flyweight

Below are the **top interview-focused ones** with **JavaScript real examples**.

---

# ✅ 1. **Adapter Pattern**

Used to **make incompatible interfaces work together**.

### **Real Example**

You have an old payment API but want to use it with a new app.

### **Code**

```js
// Old API
class OldPaymentAPI {
  makePayment(amount) {
    console.log(`Old API paid: ₹${amount}`);
  }
}

// New API expected method: pay(amount)
class PaymentAdapter {
  constructor(oldAPI) {
    this.oldAPI = oldAPI;
  }

  pay(amount) {
    this.oldAPI.makePayment(amount);
  }
}

// Usage
const oldAPI = new OldPaymentAPI();
const adapter = new PaymentAdapter(oldAPI);

adapter.pay(500);
```

🟢 Output

```
Old API paid: ₹500
```

---

# ✅ 2. **Facade Pattern**

Provides a **simple interface** to a complex system.

### **Real Example**

Booking a flight → behind the scenes:

* Search flights
* Check seats
* Make payment
* Send email

Facade gives one call: `bookFlight()`.

### **Code**

```js
class FlightSearch {
  search() { console.log("Searching flights..."); }
}
class SeatBooking {
  reserve() { console.log("Reserving seats..."); }
}
class Payment {
  pay() { console.log("Processing payment..."); }
}
class EmailService {
  send() { console.log("Sending ticket email..."); }
}

class TravelFacade {
  bookFlight() {
    const search = new FlightSearch();
    const seat = new SeatBooking();
    const pay = new Payment();
    const email = new EmailService();

    search.search();
    seat.reserve();
    pay.pay();
    email.send();
  }
}

// Usage
const travel = new TravelFacade();
travel.bookFlight();
```

---

# ✅ 3. **Decorator Pattern**

Add new functionalities to an object **without modifying original class**.

### **Real Example**

Adding extra features to an order:

* Base pizza
* Add cheese
* Add toppings

### **Code**

```js
class Pizza {
  cost() {
    return 200;
  }
}

function addCheese(pizza) {
  const cost = pizza.cost();
  pizza.cost = function () {
    return cost + 50;
  };
  return pizza;
}

function addToppings(pizza) {
  const cost = pizza.cost();
  pizza.cost = function () {
    return cost + 70;
  };
  return pizza;
}

// Usage
let myPizza = new Pizza();
myPizza = addCheese(myPizza);
myPizza = addToppings(myPizza);

console.log("Total Cost: ₹" + myPizza.cost());
```

🟢 Output

```
Total Cost: ₹320
```

---

# ✅ 4. **Proxy Pattern**

Provides a **substitute** for another object to control access.

### **Real Example**

Rate limiting an API call → limit calls per minute.

### **Code**

```js
class API {
  request() {
    console.log("API Called");
  }
}

class APIProxy {
  constructor() {
    this.api = new API();
    this.callCount = 0;
  }

  request() {
    if (this.callCount >= 3) {
      console.log("Rate limit exceeded");
      return;
    }
    this.callCount++;
    this.api.request();
  }
}

// Usage
const api = new APIProxy();

api.request();
api.request();
api.request();
api.request(); // Rate limit
```

---

# ✅ 5. **Composite Pattern**

Treat a group of objects and a single object **uniformly**.

### **Real Example**

Folder structure:

* Folder can contain files and other folders.

### **Code**

```js
class File {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log("File:", this.name);
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  show() {
    console.log("Folder:", this.name);
    this.items.forEach(item => item.show());
  }
}

// Usage
const root = new Folder("root");
const file1 = new File("a.txt");
const file2 = new File("b.txt");
const subFolder = new Folder("src");

subFolder.add(new File("index.js"));

root.add(file1);
root.add(file2);
root.add(subFolder);

root.show();
```

---

