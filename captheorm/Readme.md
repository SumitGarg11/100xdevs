# ✔ Consistency (C)
- Definition: Every read receives the most recent write or an error.
```
📌 In our code:

When a student borrows the book (POST /borrow-book), the system immediately updates the bookHolder.
If another student asks who has the book (GET /book-status), they will always get the most recent borrower.
If another student tries to borrow the book before it's returned, they get an error (409 - Book already borrowed).
✅ Ensures that everyone sees the latest state of the book → No stale or outdated data
```

# ✔ Partition Tolerance (P)
- Definition: The system keeps running even if some network connections fail or messages between servers are lost/delayed.
  
```
📌 In our code:

The leader node (librarian) controls book access.
If the leader is down or unreachable, the system rejects borrow/return requests (503 - Librarian unavailable).
This prevents multiple students from borrowing the book at the same time due to network failures.
✅ Even if network failures happen, the system does not allow inconsistencies.

```