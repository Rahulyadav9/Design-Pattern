Prototype Pattern creates new objects by copying an existing object (prototype) rather than instantiating new ones using constructors.

```js
class User {
  constructor(name, role, permissions) {
    this.name = name;
    this.role = role;
    this.permissions = permissions;
  }

  clone() {
    return new User(
      this.name,
      this.role,
      [...this.permissions] // deep copy
    );
  }
}

// ===== Prototype =====
const adminPrototype = new User(
  "Default Admin",
  "ADMIN",
  ["READ", "WRITE", "DELETE"]
);

// ===== Client =====
const admin1 = adminPrototype.clone();
admin1.name = "Rahul";

const admin2 = adminPrototype.clone();
admin2.name = "Amit";

console.log(admin1);
console.log(admin2);
```
