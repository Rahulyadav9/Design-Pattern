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

const logistics = new SeaLogistics();
const transport = logistics.createTransport();
transport.deliver();
