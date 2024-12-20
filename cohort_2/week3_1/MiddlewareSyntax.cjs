const express = require('express');
const app = express();

// this is the middleware next is use for the go the next route 
app.get('/healthcheck',function(req,res,next){
    console.log("hii from req1");
    next();
},function(req,res){
    console.log("hii from req2");
});
app.listen(3000);