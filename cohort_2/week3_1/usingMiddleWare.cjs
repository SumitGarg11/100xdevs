const express = require('express');
const app = express();

function ageCheckMiddleWare(req,res,next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }else{
        res.json({msg: "Sorry for this Ride"})
    }
}
app.use(ageCheckMiddleWare);
app.get("/ride1",  function(req,res){
    res.json({msg : "You Have the Successful Ride"})
});
app.get("/ride2",function(req,res){
    res.json({msg:"You have the SucessFul Ride"});
})
app.listen(3000,()=>{console.log("server run on 3000")});