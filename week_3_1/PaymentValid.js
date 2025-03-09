import express from "express";
import zod from "zod";
const app = express();
app.use(express.json());
const PaymentSchema = zod.object({
  cardnumber: zod.string().regex(/^\d{16}$/, "card number must be 16 digits"),
  expirydate: zod
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format"),
  cvv: zod.string().regex(/^\d{3}$/, "cvv must be exactly 3 digits"),
  amount: zod.number().positive("Amount must be greater than zero"),
});
app.post("/payment", function (req, res) {
  const response = PaymentSchema.safeParse(req.body);
  if (!response.success) {
    res.status(404).json({ error: response.error.format() });
  }
  console.log(response);
  res.send("Payment processed successfully");
});
app.listen(3000, function () {
  console.log("server is running on port 3000");
});

// {
//     "cardNumber": "1234567812345678",
//     "expiryDate": "12/26",
//     "cvv": "123",
//     "amount": 100.50
// }
