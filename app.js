import express from "express";
const app = express();


app.use(express.json());

import employeesRouter from "./api/employees.js"; 


// Middleware to parse JSON bodies


// Attach your employees router
app.use("/employees", employeesRouter);

// Optional: basic error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;



// TODO: this file!
