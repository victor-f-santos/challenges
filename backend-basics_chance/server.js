import { createServer } from "node:http";
import { Chance } from "chance";

export const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end(chance);
});

const chance = new Chance();
chance.name();
chance.age();
chance.profession();
