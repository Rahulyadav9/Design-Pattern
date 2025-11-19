Abstract Factory Pattern

###Purpose: Create families of related objects without specifying concrete classes.

Real-life example:

A UI theme (Light/Dark) should create matching button + checkbox styles.

###JavaScript Example
```js
class LightButton { paint() { console.log("Light Button"); } }
class DarkButton  { paint() { console.log("Dark Button"); } }

class LightCheckbox { paint() { console.log("Light Checkbox"); } }
class DarkCheckbox  { paint() { console.log("Dark Checkbox"); } }

class LightFactory {
  createButton() { return new LightButton(); }
  createCheckbox() { return new LightCheckbox(); }
}

class DarkFactory {
  createButton() { return new DarkButton(); }
  createCheckbox() { return new DarkCheckbox(); }
}

function app(factory) {
  factory.createButton().paint();
  factory.createCheckbox().paint();
}
```
