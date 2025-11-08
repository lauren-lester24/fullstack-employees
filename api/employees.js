import express, { response } from "express";
const router = express.Router();

import { getEmployees, getEmployee, updateEmployee, deleteEmployee, } from "#db/queries/employees";

router.route("/").get(async (req, res) => {
    const employees = await getEmployees();
    res.send(employees);
});

//GET /employees
router.get("/", async (req, res, next) => {
    try {
        const employees = await getEmployees()
        res.status(200).json(employees);
     
    } catch (error) {
    console.error("Error fetching Employees", error);
    next(error)    
    }
});


// PUT employee id
router.put("/:id", async( req, res, next) => {
    try {
        const {id} = req.params;
        const{ name, birthday, salary } = req.body;

        if(!name || !birthday || !salary) {
            return res.status(400).json({error: "Missing required fields"});
        }

        const updatedEmployee = await updateEmployee({
id,
name,
birthday,
salary

        });
        if(!updatedEmployee) {
            return res.status(404).json({error: "Employee not found"});
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        console.error("Error Updating Employee", error);
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await deleteEmployee(id);
    if (!deletedEmployee) {
      return res.status(404).json({ error: "Employee not Found" });
    }
    res.status(200).json(deletedEmployee);
  } catch (error) {
    console.error(`Error deleting Employee ${req.params.id}`, error);
    next(error);
  }
});





export default router;

