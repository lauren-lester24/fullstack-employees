import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  try {
    const sql =`
    INSERT INTO employees ( name, birthday, salary)
    VALUES ($1, $2, $3)
     RETURNING *;
    
    `;
    const values = [ name, birthday, salary];
    const  { rows } =await db.query(sql,values);
    console.log("New Employee Added", rows[0])
    return rows[0];
    
  } catch (error) {
    console.error("Error Creating Employee", error);
    throw error;
  }

}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
  const sql = `
  SELECT *
  FROM employees
  
  `;
  const { rows: employees } = await db.query(sql);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  try {
    const sql = `
    SELECT *
    FROM employees
    WHERE id = $1
    `;
    const { rows } = await db.query(sql, [id]);
    return rows[0];
  } catch (error) {
    console.error("Error Fetching Employee", error);
    throw error;
  }
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  try {
    const sql = `
    UPDATE employees
    SET name = $1,
    birthday = $2,
    salary = $3
    WHERE id = $4
    RETURNING *

    `;
    const values = [name, birthday, salary, id];
    const { rows } = await db.query(sql, values);
    return rows[0];
  } catch (error) {
    console.error("Error updaging Employee", error);
    throw error;
  }
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
     const sql = `
      DELETE FROM employees
      WHERE id = $1
      RETURNING *
    `;
    try {
     const { rows } = await db.query(sql, [id]);
     return rows[0]; 
   } catch (error) {
     console.error("Error deleting employee", error);
     throw error;
   }
}
