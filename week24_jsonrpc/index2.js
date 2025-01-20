const protobuf = require("protobufjs");

// Load the .proto file
protobuf
  .load("a.proto")
  .then((root) => {
    // Lookup the Person type from the loaded .proto file
    const Person = root.lookupType("Person");

    // Create a sample Person object
    const person = { name: "Alice", age: 30 };

    // Validate the Person object
    const errMsg = Person.verify(person);
    if (errMsg) throw Error(errMsg);

    // Serialize Person to a Buffer
    const buffer = Person.encode(person).finish();

    // Write the Buffer to a file
    require("fs").writeFileSync("person.bin", buffer);
    console.log("Person serialized and saved to person.bin");

    // Read the Buffer back from the file
    const data = require("fs").readFileSync("person.bin");

    // Deserialize the Buffer into a Person object
    const deserializedPerson = Person.decode(data);
    console.log("Person deserialized from person.bin: ", deserializedPerson);
  })
  .catch(console.error);
