import React, { useState, useEffect } from "react";
// import Table from "../components/Table/index";
import API from "../utils/API";
import Button from "../components/Button";
import { Table, TableRow, TableData } from "../components/Table";
import EmployeeCard from "../components/EmployeeCard";

function TablePage() {
  const [employees, setEmployees] = useState([]);
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    id: "",
    department: "",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }

  function deleteEmployee(id) {
    API.deleteEmployee(id)
      .then(() => loadEmployees())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    // event.preventDefault();
    if (
      formObject.firstName &&
      formObject.lastName &&
      formObject.id &&
      formObject.department
    ) {
      API.saveEmployee({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        id: formObject.id,
        department: formObject.department,
      })
        .then(() =>
          setFormObject({
            firstName: "",
            lastName: "",
            id: "",
            department: "",
          })
        )
        .then(() => loadEmployees())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <br />
      <h1 style={{ textAlign: "center" }}>Work Book</h1>
      <br />
      <br />
      <Table>
        {employees.map((employee) => (
          <TableRow key={employee._id}>
            <TableData>{employee.firstName}</TableData>
            <TableData>{employee.lastName}</TableData>
            <TableData>{employee.id}</TableData>
            <TableData>{employee.department}</TableData>
            <TableData>
              <Button onClick={() => deleteEmployee(employee._id)}>X</Button>
            </TableData>
          </TableRow>
        ))}
      </Table>

      <EmployeeCard>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Currency</span>
          </div>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="firstName"
            placeholder="£"
            value={formObject.firstName}
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              Stock/Country/Cryptocurrency
            </span>
          </div>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="lastName"
            placeholder="British Pound"
            value={formObject.lastName}
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Price/Rate</span>
          </div>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="id"
            placeholder="£380.6500"
            value={formObject.id}
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Notes</span>
          </div>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="department"
            placeholder="$500 US = £380.6500"
            value={formObject.department}
          />
        </div>
        <Button onClick={() => handleFormSubmit()}>Submit</Button>
      </EmployeeCard>
    </div>
  );
}

export default TablePage;
