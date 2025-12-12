
###3. Chain of Responsibility (Real Example: Express Middleware)

A request flows through a chain until one handler processes it.

Use Case:

Token Validation → Role Check → API Handler.

Code Example

```js
class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) return this.next.handle(request);
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.token) {
      return "Auth failed: No token";
    }
    console.log("Auth Passed");
    return super.handle(request);
  }
}

class RoleHandler extends Handler {
  handle(request) {
    if (request.role !== "admin") {
      return "Access Denied: Not an admin";
    }
    console.log("Role Verified");
    return super.handle(request);
  }
}

class APIHandler extends Handler {
  handle(request) {
    return "Data returned successfully!";
  }
}

// Chain
const auth = new AuthHandler();
const role = new RoleHandler();
const api = new APIHandler();

auth.setNext(role).setNext(api);

// Request
console.log(auth.handle({ token: "xyz", role: "admin" }));
```

output
```
Auth Passed
Role Verified
Data returned successfully!
```
