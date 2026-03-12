import React from "react";
import "./PersonalDetails.css";
import { useNavigate } from "react-router-dom";
// import { Route,Router } from "react-router-dom";


function PersonalDetails() {
    const Nav=useNavigate()
    // const Back=Route.Back()

  return (
    <div className="form-container">
    <h2>Personal Details</h2>
    {/* <ul class="step-navbar">
  <li class="step">Basic Details</li>
  <li class="step active">Personal Details</li>
  <li class="step">Parents Details</li>
  <li class="step">Guardian Details</li>
  <li class="step">Academic Details</li>
  <li class="step">Address Details</li>
  <li class="step">Upload Details</li>
</ul> */}

      <div className="form-grid">

        {/* Name */}
        <div className="form-group">
          <label>Title</label>
          <select>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter First Name"/>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter Last Name"/>
        </div>

        {/* Contact */}
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter Email"/>
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input type="text" placeholder="+91"/>
        </div>

        <div className="form-group">
          <label>Alternate Mobile</label>
          <input type="text"/>
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label><input type="radio" name="gender"/> Male</label>
            <label><input type="radio" name="gender"/> Female</label>
            <label><input type="radio" name="gender"/> Other</label>
          </div>
        </div>

        {/* DOB */}
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date"/>
        </div>

        {/* Blood Group */}
        <div className="form-group">
          <label>Blood Group</label>
          <select>
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>AB+</option>
          </select>
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <div className="radio-group">
            <label><input type="radio" name="category"/> General</label>
            <label><input type="radio" name="category"/> OBC</label>
            <label><input type="radio" name="category"/> SC</label>
            <label><input type="radio" name="category"/> ST</label>
          </div>
        </div>

        {/* Religion */}
        <div className="form-group">
          <label>Religion</label>
          <input type="text"/>
        </div>

        {/* Nationality */}
        <div className="form-group">
          <label>Nationality</label>
          <input type="text"/>
        </div>

        {/* Aadhaar */}
        <div className="form-group">
          <label>Aadhaar Number</label>
          <input type="text"/>
        </div>

      </div>

      <div className="buttons">
        <button className="cancel" onClick={()=> Nav("/")}>Back</button>
        <button className="next" onClick={() => Nav("/ParentsDetails")}>Next</button>
      </div>

    </div>
  );
}

export default PersonalDetails;