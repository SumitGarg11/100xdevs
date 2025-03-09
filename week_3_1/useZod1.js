import zod from "zod";
function validate(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const result = schema.safeParse(obj);
  console.log(result);
}
validate({
  email: "test@gmail.com",
  password: "jtest123",
});
