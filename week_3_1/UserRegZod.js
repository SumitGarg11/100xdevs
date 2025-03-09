import express from "express";
import zod from "zod";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const userSchema = zod.object({
  username: zod
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"),
  email: zod.string().email("Invalid email address"),
  password: zod
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  age: zod
    .number()
    .int("Age must be a natural number")
    .min(18, "You must at least 18 yr old"),
  address: zod.object({
    street: zod.string().min(5, "Street name must be at least 5 characters"),
    city: zod.string().min(2, "City name must be at least 2 characters"),
    zipcode: zod.string().regex(/^\d{5}$/, "Zipcode must be exactly 5 digits"),
  }),
});
app.post("/register", function (req, res) {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: result.error.format() });
  }
  res.json({ message: "User registered successfully!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));




// {
//     "username": "090iyhhj",
//     "email": "johxample.com",
//     "password": "Password1",
//     "age": 25,
//     "address": {
//       "street": "123 Main St",
//       "city": "New York",
//       "zipcode": "10001"
//     }
// }
  