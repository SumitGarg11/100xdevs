const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.object({
    email: zod.string().email(), // Added email validation
});

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const response = schema.safeParse(req.body); // Validate the entire body
   
    res.send({response});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
