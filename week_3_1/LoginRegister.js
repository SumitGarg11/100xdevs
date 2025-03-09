const jwt = require("jsonwebtoken");

// Temporary user database (Replace with real DB)
const users = [];

app.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    users.push({ username, password });  // Store user (In-memory)
    res.json({ message: "User registered successfully" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" }); // Generate JWT
    res.json({ token });
});
