import express from 'express';
const app = express();
app.use(express.json());
app.post('/',function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send('you have '+kidneyLength+" kidneys");
})
app.listen(3000,function(){
    console.log('server is running on port 3000');
})

// in postman write in body
//  { 
//     "kidneys":[1,2,3,4]
//  }