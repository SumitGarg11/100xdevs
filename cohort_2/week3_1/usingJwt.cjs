const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "12345"
const app = express();

app.use(express.json());
const ALL_USER = [
    {
        username: "sumit@gmail.com",
        password: "123",
        name: "Sumit"
    },
    {
        username: "rohan@gmail.com",
        password: "123",
        name: "Rohan"
    },

];
function userExits(username, password){
    let userExits = false;
    for(let i =0; i<ALL_USER.length; i++){
        if(ALL_USER[i].username == username  && ALL_USER[i].password == password){
            userExits = true;
        }
    }
    return userExits;
}
app.post('/sigin',function (req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(!userExits(username, password)){
        return res.status(411).json({
            msg: "Invalid username or password"
        })
    }
    var token = jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    })
})

app.get("/users",function(req,res){
    const token = req.headers.authorization;

    const decoded = jwt.verify(token,jwtPassword);
    const username = decoded.username;
    res.json({
        users : ALL_USER
    })
    
   
    
})
app.listen(3000,()=>{console.log("server run on 3000")});