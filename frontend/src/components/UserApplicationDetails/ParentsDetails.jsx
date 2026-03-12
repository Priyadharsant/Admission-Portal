import React from "react";
import "./ParentDetails.css";
import { useNavigate } from "react-router-dom";

function ParentsDetails() {
    const Nav=useNavigate()
  return (
    <div className="form-container">

      <h2>3. Parents Details</h2>

      {/* Father's Details */}
      <h3>Father's Details</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Father's Title</label>
          <select>
            <option>Mr</option>
          </select>
        </div>

        <div className="form-group">
          <label>Father's Name</label>
          <input type="text" placeholder="Enter Father's Name"/>
        </div>

        <div className="form-group">
          <label>Father's Mobile Number</label>
          <input type="text" placeholder="+91"/>
        </div>

        <div className="form-group">
          <label>Father's Email Address</label>
          <input type="email" placeholder="Enter Email"/>
        </div>

        <div className="form-group">
          <label>Father's Occupation</label>
          <input type="text" placeholder="Enter Occupation"/>
        </div>

        <div className="form-group">
          <label>Family Annual Income</label>
          <select>
            <option>0-3 Lakh</option>
            <option>3-5 Lakh</option>
            <option>5-10 Lakh</option>
          </select>
        </div>

      </div>


      {/* Mother's Details */}
      <h3>Mother's Details</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Mother's Title</label>
          <select>
            <option>Mrs</option>
            <option>Ms</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mother's Name</label>
          <input type="text" placeholder="Enter Mother's Name"/>
        </div>

        <div className="form-group">
          <label>Mother's Mobile Number</label>
          <input type="text" placeholder="+91"/>
        </div>

        <div className="form-group">
          <label>Mother's Email Address</label>
          <input type="email" placeholder="Enter Email"/>
        </div>

        <div className="form-group">
          <label>Mother's Occupation</label>
          <input type="text" placeholder="Enter Occupation"/>
        </div>

        <div className="form-group">
          <label>Family Annual Income</label>
          <select>
            <option>0-3 Lakh</option>
            <option>3-5 Lakh</option>
            <option>5-10 Lakh</option>
          </select>
        </div>

      </div>


      <div className="form-buttons">
        <button className="cancel" onClick={()=> Nav("/PersonalDetails")}>Back</button>
        <button className="next" onClick={()=>Nav("/GuardianDetails")}>Next</button>
      </div>

    </div>
  );
}

export default ParentsDetails;