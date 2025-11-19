1. Factory Method Pattern

Purpose: Let subclasses decide which object to create.

Real-life example:

A Logistics company can deliver by Truck or Ship. Factory picks which one to create.
```js
JavaScript Example
class Transport {
  deliver() {}
}

class Truck extends Transport {
  deliver() {
    console.log("Delivering by road");
  }
}

class Ship extends Transport {
  deliver() {
    console.log("Delivering by sea");
  }
}

class Logistics {
  createTransport() {}
}

class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  }
}
```

const logistics = new SeaLogistics();
const transport = logistics.createTransport();
transport.deliver();
