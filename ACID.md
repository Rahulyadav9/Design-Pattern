
---

## 🧩 What is ACID?

**ACID** stands for:

> **A** → Atomicity
> **C** → Consistency
> **I** → Isolation
> **D** → Durability

These properties together guarantee that **transactions** in a database are processed **reliably**.

---

## 🔹 1. **Atomicity**

> “All or nothing” — a transaction must **complete fully or not at all**.

If any part of the transaction fails, the **entire transaction is rolled back**, and the database returns to its previous state.

### 💡 Example

Imagine a **money transfer** between two bank accounts:

```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1; -- debit
UPDATE accounts SET balance = balance + 1000 WHERE id = 2; -- credit

COMMIT;
```

If the second update fails (e.g., due to a crash),
→ the first update is **rolled back** — ensuring no partial transfer happens.

✅ **Either both succeed or both fail**.

---

## 🔹 2. **Consistency**

> A transaction must bring the database **from one valid state to another valid state**.

All **rules, constraints, and relationships** (like foreign keys, triggers, and unique keys) must be preserved.

### 💡 Example

If a bank’s total money = sum of all account balances,
then after any transfer, that invariant must remain true.

```sql
-- Before: A = 1000, B = 500 → Total = 1500
-- After:  A = 800,  B = 700 → Total = 1500 ✅ (consistent)
```

If due to a bug one record updates but the other doesn’t → total becomes 1300 ❌
→ That violates **consistency**.

---

## 🔹 3. **Isolation**

> Multiple transactions can run **concurrently** without affecting each other’s results.

Each transaction behaves as if it’s **executed alone** (serially).

### 💡 Example

Two users transferring money at the same time:

| Transaction A            | Transaction B            |
| ------------------------ | ------------------------ |
| Reads balance = 1000     | Reads balance = 1000     |
| Deducts 100              | Deducts 200              |
| Writes new balance (900) | Writes new balance (800) |

Without **isolation**, both may write 800 or 900 incorrectly.
With **proper isolation**, database ensures serial consistency → final balance = 700 ✅

---

### 🔸 Isolation Levels (SQL)

| Level                | Phenomena Prevented         | Description                                             |
| -------------------- | --------------------------- | ------------------------------------------------------- |
| **Read Uncommitted** | None                        | Can read uncommitted (dirty) data ❌                     |
| **Read Committed**   | Dirty reads                 | Reads only committed data                               |
| **Repeatable Read**  | Dirty, Non-repeatable reads | Ensures same data read within transaction               |
| **Serializable**     | All anomalies               | Highest isolation — behaves like sequential execution ✅ |

---

## 🔹 4. **Durability**

> Once a transaction is **committed**, it’s **permanent**, even in case of a crash or power failure.

Databases achieve this by **writing to disk** or **transaction logs** before confirming success.

### 💡 Example

After committing a transaction:

```sql
COMMIT;
```

✅ Even if the server restarts, the committed data remains in the database.

Databases use:

* **Write-ahead logs (WAL)** or **redo logs**
* **Replication** and **backups**

---

## ⚡ Real-world Analogy

Imagine you are **booking a flight ticket**:

| Step                               | ACID Property   | Description              |
| ---------------------------------- | --------------- | ------------------------ |
| Payment deducted & seat reserved   | **Atomicity**   | Both happen or none      |
| Seat not double-booked             | **Consistency** | Database rules enforced  |
| Two users booking same seat        | **Isolation**   | Each booking independent |
| Booking confirmed even after crash | **Durability**  | Data safely persisted    |

---

## 🧠 Summary Table

| Property        | Definition                     | Ensures                        |
| --------------- | ------------------------------ | ------------------------------ |
| **Atomicity**   | All operations succeed or none | No partial updates             |
| **Consistency** | Data integrity maintained      | Valid state transitions        |
| **Isolation**   | Transactions don’t interfere   | Correct concurrent behavior    |
| **Durability**  | Data survives crashes          | Permanent results after commit |

---

Would you like me to show **how ACID is implemented internally** in databases like **MySQL (InnoDB)** or **MongoDB (transactions)** — with examples of commit logs and rollback behavior?
