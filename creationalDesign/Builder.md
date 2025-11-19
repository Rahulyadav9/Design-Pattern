3. Builder Pattern

Purpose: Build complex objects step by step.

Real-life example:

Building a burger with optional ingredients.

JavaScript Example
```js
class Burger {
  constructor() {
    this.size = null;
    this.cheese = false;
    this.pepperoni = false;
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  setSize(size) {
    this.burger.size = size;
    return this;
  }

  addCheese() {
    this.burger.cheese = true;
    return this;
  }

  addPepperoni() {
    this.burger.pepperoni = true;
    return this;
  }

  build() {
    return this.burger;
  }
}

const burger = new BurgerBuilder()
  .setSize("Large")
  .addCheese()
  .addPepperoni()
  .build();

console.log(burger);
```
