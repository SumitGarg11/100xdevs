const zod = require("zod");
function validateInput(obj){
    const schema = zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}
validateInput({
    "email" : "shyam10hari@gmail.com",
    "password" : "123456789"
})