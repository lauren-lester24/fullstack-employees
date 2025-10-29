import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
 await createEmployee({
   name: "Alice Johnson",
   birthday: "1990-04-12",
   salary: 60000,
 });

 await createEmployee({
   name: "Bob Smith",
   birthday: "1985-09-30",
   salary: 55000,
 });

 await createEmployee({
   name: "Charlie Brown",
   birthday: "1992-11-02",
   salary: 62000,
 });

 await createEmployee({
   name: "Dana Kim",
   birthday: "1995-06-25",
   salary: 58000,
 });

 await createEmployee({
   name: "Evan Davis",
   birthday: "1988-01-17",
   salary: 72000,
 });

 await createEmployee({
   name: "Fiona Chen",
   birthday: "1993-07-08",
   salary: 64000,
 });

 await createEmployee({
   name: "George Lopez",
   birthday: "1991-03-19",
   salary: 50000,
 });

 await createEmployee({
   name: "Hannah Lee",
   birthday: "1994-10-10",
   salary: 67000,
 });

 await createEmployee({
   name: "Ian Clark",
   birthday: "1987-12-05",
   salary: 75000,
 });

 await createEmployee({
   name: "Julia Martinez",
   birthday: "1996-08-21",
   salary: 59000,
 });

 console.log("✅ All example employees have been added!");


}
