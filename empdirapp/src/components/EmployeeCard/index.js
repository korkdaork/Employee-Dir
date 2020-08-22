import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <table>
          <tr>
            <th><strong>Name</strong></th>
            <th><strong>E-Mail</strong></th>
            <th><strong>Phone Number</strong></th>
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
          </tr>
        </table>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
