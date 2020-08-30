const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactemployeelist"
);

const employeeSeed = [
  {
    firstName: "Bob",
    lastName: "Saget",
    id: "567412",
    department: "Accounting"
  },
  {
    firstName: "Jeff",
    lastName: "Dunham",
    id: "476613",
    department: "Human Resources"
  },
  {
    firstName: "Raj",
    lastName: "Patel",
    id: "447281",
    department: "Sales"
  }
];

db.Employee
  .remove({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
