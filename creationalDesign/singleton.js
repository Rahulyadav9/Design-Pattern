class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.name = "Singleton Instance";

    Singleton.instance = this;
  }
}

const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true
