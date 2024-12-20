const express = require('express');
const app = express();
function userMiddleWare(req,res,next){
    const username = req.headers.username; // Fetch username from headers
    const password = req.headers.password; 
    if (username !== "sumit" || password !== "1234") {
        res.status(401).json({ msg: "Invalid username or password" });
        
    }
    else{
        next();
    }
}
function kidneyMiddleWare(req,res,next){
    const kidneyId = parseInt(req.query.kidneyId);
    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(400).json({ msg: "Invalid kidneyId" });
        return;
    }
    else{
        next();
    }
}

app.get('/healthcheck', userMiddleWare, kidneyMiddleWare , function (req, res) {

    res.json({ msg: "Your heart is healthy" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
