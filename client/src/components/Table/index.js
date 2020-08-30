import React from "react";
// import API from "../../utils/API";
// import Button from "../Button/index";
// import $ from "jquery";

export function Table({children}) {
  return (
    <table className="table">
      <thead>
        <tr>
      <th scope="col">Currency</th>
      <th scope="col">Stock/Country/Cryptocurrency</th>
      <th scope="col">Price/Rate</th>
      <th scope="col">Notes</th>
      <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export function TableRow ({children}) {
return <tr>{children}</tr>
}

export function TableData ({children}) {
return <td>{children}</td> 
}