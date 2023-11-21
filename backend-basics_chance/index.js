import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
  console.log(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}`
  );
});
