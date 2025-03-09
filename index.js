// Write your solution in this file!
// creating the initial employee object
let employee = {
    name: "John",
    streetAddress: "123 Main St"
  };
  
  //  update employee without modifying the original object (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, // Spread operator to copy existing properties
      [key]: value // Update the specific key
    };
  }
  
  // Function to update employee destructively (mutates original object)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly modify the object
    return employee; // Return the modified object
  }
  
  // Function to delete a key from employee without modifying the original (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; // Create a copy
    delete newEmployee[key]; // Remove the key
    return newEmployee; // Return the new object
  }
  
  // Function to delete a key from employee destructively (modifies original object)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // remove the key
    return employee; // Returns the modified object
  }
  
  
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  