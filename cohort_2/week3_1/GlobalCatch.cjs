const express = require('express');
const app = express();
app.get('/health-check',function(req,res){
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;
    res.send("Your kidney length" + kidneylength); 
})
app.use((err,req,res,next )=>{
    res.status(500).send('an internal server error occurred')
})

