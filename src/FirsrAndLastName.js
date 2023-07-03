import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
const FirsrAndLastName = () => {
  return (
    <div className="info-details">
      <label for="first">First Name</label>
      <input type="text" id="first" className="me-4" placeholder="First Name" />
      <label for="Last">Last Name</label>
      <input type="text" id="Last" placeholder="Last Name" />
    </div>
  );
};
export default FirsrAndLastName;
