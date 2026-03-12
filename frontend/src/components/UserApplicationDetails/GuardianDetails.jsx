import React from "react";
import "./GuardianDetails.css";
import { useNavigate } from "react-router-dom";

function GuardianDetails() {
    const Nav=useNavigate()
  return (
    <div className="form-container">

      <h2>4. Guardian Details</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Guardian Title</label>
          <select>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
          </select>
        </div>

        <div className="form-group">
          <label>Guardian Name</label>
          <input type="text" placeholder="Enter Guardian Name"/>
        </div>

        <div className="form-group">
          <label>Relationship with Student</label>
          <input type="text" placeholder="Example: Uncle, Brother"/>
        </div>

        <div className="form-group">
          <label>Guardian Mobile Number</label>
          <input type="text" placeholder="+91"/>
        </div>

        <div className="form-group">
          <label>Guardian Email Address</label>
          <input type="email" placeholder="Enter Email"/>
        </div>

        <div className="form-group">
          <label>Guardian Occupation</label>
          <input type="text" placeholder="Enter Occupation"/>
        </div>

        <div className="form-group">
          <label>Annual Income</label>
          <select>
            <option>0 - 3 Lakh</option>
            <option>3 - 5 Lakh</option>
            <option>5 - 10 Lakh</option>
            <option>Above 10 Lakh</option>
          </select>
        </div>

        <div className="form-group">
          <label>Guardian Address</label>
          <input type="text" placeholder="Enter Address"/>
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text"/>
        </div>

        <div className="form-group">
          <label>State</label>
          <input type="text"/>
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input type="text"/>
        </div>

      </div>

      <div className="form-buttons">
        <button className="cancel" onClick={()=>Nav("/ParentsDetails")}>Back</button>
        <button className="next" onClick={()=> Nav("/AddressDetails")}>Next</button>
      </div>

    </div>
  );
}

export default GuardianDetails;