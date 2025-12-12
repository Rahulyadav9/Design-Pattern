

###✅ 1. Observer Pattern (Real Example: Notification System)

When something changes → all subscribers get notified.

Use Case:

A user posts a message → all followers get notifications.

Code Example
```js
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(sub => sub !== fn);
  }

  notify(data) {
    this.observers.forEach(sub => sub(data));
  }
}

// Usage
const userPost = new Observable();

// Subscribers
const emailNotifier = (msg) => console.log("Email:", msg);
const smsNotifier = (msg) => console.log("SMS:", msg);

// Users subscribe
userPost.subscribe(emailNotifier);
userPost.subscribe(smsNotifier);

// User posts a message
userPost.notify("Rahul posted a new photo!");

```
### output
```js
Email: Rahul posted a new photo!
SMS: Rahul posted a new photo!
```
