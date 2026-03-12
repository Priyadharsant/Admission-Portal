import React from "react";
import "./UploadDetails.css";
import { useNavigate } from "react-router-dom";

function UploadDetails() {
    const Nav=useNavigate();

  return (
    <div className="form-container">

      <h2>Upload Documents</h2>

      <div className="upload-grid">

        <div className="upload-group">
          <label>Passport Size Photo</label>
          <input type="file" accept=".jpg,.png,.pdf"/>
        </div>

        <div className="upload-group">
          <label>Student Signature</label>
          <input type="file" accept=".jpg,.png,.pdf"/>
        </div>

        <div className="upload-group">
          <label>10th Marksheet</label>
          <input type="file" accept=".jpg,.png,.pdf"/>
        </div>

        <div className="upload-group">
          <label>12th Marksheet</label>
          <input type="file" accept=".jpg,.png,.pdf"/>
        </div>

        <div className="upload-group">
          <label>Transfer Certificate</label>
          <input type="file" accept=".jpg,.png,.pdf"/>
        </div>

        <div className="upload-group">
          <label>Community / Caste Certificate</label>
          <input type="file" accept=".jpg,.png,.pdf"/>
        </div>

        <div className="upload-group">
          <label>Income Certificate</label>
          <input type="file" accept=".jpg,.png,.pdf"/>
        </div>

        <div className="upload-group">
          <label>ID Proof (Aadhar / Passport)</label>
          <input type="file" accept=".jpg,.png,.pdf"/>
        </div>

      </div>


      {/* Declaration Footer */}

      <div className="declaration-box">

        <p>
          I hereby declare that the documents uploaded by me are genuine
          and the information provided in this application form is true
          to the best of my knowledge. I am aware that if any information herein is found to be incorrect or incomplete at any stage of admission process my application form will be rejected and my claim for this admission will be forfeited. 
        </p>

        <div className="checkbox-section">
          <input type="checkbox"/>
          <label>I agree to the declaration mentioned above</label>
        </div>

      </div>


      <div className="form-buttons">
        <button className="cancel" onClick={()=>Nav("/AcademicDetails")}>Back</button>
        <button className="next">Submit Application</button>
      </div>

    </div>
  );
}

export default UploadDetails;