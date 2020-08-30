//create schema
//what columns you want and how you want them

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    id: { type: String, required: true },
    department: { type: String}
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;