const express = require('express');
const app = express();

app.get('/healthcheck', function (req, res) {
    const kidneyId = parseInt(req.query.kidneyId); // Convert kidneyId to a number
    const username = req.headers.username; // Fetch username from headers
    const password = req.headers.password; // Fetch password from headers

    // Validate username and password
    if (username !== "sumit" || password !== "1234") {
        res.status(401).json({ msg: "Invalid username or password" });
        return;
    }

    // Validate kidneyId
    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(400).json({ msg: "Invalid kidneyId" });
        return;
    }

    // If all validations pass
    res.json({ msg: "Your heart is healthy" });
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
