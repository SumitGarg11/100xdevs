const express = require('express');
const app = express();
const zod = require('zod');
const schema =  zod.object({
    email: zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US")),
    kidneys:zod.array(zod.number())
})
app.use(express.json());
app.post('/health-check',function(req,res){
    const response = schema.safeParse(req.body);
    res.send({response});
})
app.listen(3000,()=>{console.log("server run on 3000")});