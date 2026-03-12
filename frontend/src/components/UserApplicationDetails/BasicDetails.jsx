import React from "react";
import "./BasicDetails.css";
import { useNavigate } from "react-router-dom";

function BasicDetails() {
    const Nav = useNavigate();
  return (
    <div className="form-container">

      <h2>Basic Details</h2>

      <div className="form-grid">

        <div className="form-group">
          <label>Application Number</label>
          <input type="text" placeholder="Auto Generated" disabled />
        </div>

        <div className="form-group">
          <label>Admission Year</label>
          <select>
            <option>2026</option>
            <option>2025</option>
          </select>
        </div>

        <div className="form-group">
          <label>Admission Type</label>
          <select>
            <option>Regular</option>
            <option>Lateral Entry</option>
            <option>Transfer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Program Level</label>
          <select>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Diploma</option>
          </select>
        </div>

        <div className="form-group">
          <label>Program / Course</label>
          <select>
            <option>B.Tech Artificial Intelligence</option>
            <option>B.Tech Computer Science</option>
            <option>B.Tech Information Technology</option>
          </select>
        </div>

        <div className="form-group">
          <label>Department</label>
          <select>
            <option>Artificial Intelligence</option>
            <option>Computer Science</option>
            <option>IT</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mode of Study</label>
          <select>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>

        <div className="form-group">
          <label>Hostel Required</label>
          <div className="radio-group">
            <label><input type="radio" name="hostel"/> Yes</label>
            <label><input type="radio" name="hostel"/> No</label>
          </div>
        </div>

      </div>

      <div className="form-buttons">
        <button className="next" onClick={()=> Nav("/PersonalDetails") }>Next</button>
      </div>

    </div>
  );
}

export default BasicDetails;