Abstract Factory Pattern

###Purpose: Create families of related objects without specifying concrete classes.

Real-life example:

A UI theme (Light/Dark) should create matching button + checkbox styles.

###JavaScript Example
```js
// ===== Product Interfaces (Concrete Products) =====
class LightButton {
  paint() {
    console.log("Light Button");
  }
}

class LightCheckBox {
  paint() {
    console.log("Light Checkbox");
  }
}

class DarkButton {
  paint() {
    console.log("Dark Button");
  }
}

class DarkCheckBox {
  paint() {
    console.log("Dark Checkbox");
  }
}

// ===== Abstract Factories (Concrete Factories) =====
class LightFactory {
  createButton() {
    return new LightButton();
  }

  createCheckbox() {
    return new LightCheckBox();
  }
}

class DarkFactory {
  createButton() {
    return new DarkButton();
  }

  createCheckbox() {
    return new DarkCheckBox();
  }
}

// ===== Client Code =====
function App(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.paint();
  checkbox.paint();
}

// ===== Usage =====
App(new DarkFactory());
App(new LightFactory());

```
