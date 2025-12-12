
###2. Strategy Pattern (Real Example: Payment Methods)

Choose algorithm logic at runtime.

Use Case:

A user can pay via UPI, Card, Net Banking.

Code Example
```js
class UpiPayment {
  pay(amount) {
    console.log(`Paid ₹${amount} using UPI.`);
  }
}

class CardPayment {
  pay(amount) {
    console.log(`Paid ₹${amount} using Card.`);
  }
}

class NetBankingPayment {
  pay(amount) {
    console.log(`Paid ₹${amount} using Net Banking.`);
  }
}

class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  execute(amount) {
    this.strategy.pay(amount);
  }
}

// Usage
const payment = new PaymentContext();

payment.setStrategy(new UpiPayment());
payment.execute(500);

payment.setStrategy(new CardPayment());
payment.execute(1000);
```

###output
```js
Paid ₹500 using UPI.
Paid ₹1000 using Card.
```

