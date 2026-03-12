import React, { useState } from "react";
import "./AcademicDetails.css";
import { useNavigate } from "react-router-dom";

function AcademicDetails() {
    const Nav=useNavigate();

  const [diploma, setDiploma] = useState(false);
  const [graduation, setGraduation] = useState(false);
  const [exam, setExam] = useState(false);

  return (
    <div className="form-container">

      <h2>Academic Details</h2>

      {/* 10th Details */}

      <h3>10th Qualification</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Board</label>
          <input type="text"/>
        </div>

        <div className="form-group">
          <label>School Name</label>
          <input type="text"/>
        </div>

        <div className="form-group">
          <label>Year of Passing</label>
          <input type="number"/>
        </div>

        <div className="form-group">
          <label>Percentage / CGPA</label>
          <input type="text"/>
        </div>

      </div>


      {/* 12th Details */}

      <h3>12th Qualification</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Board</label>
          <input type="text"/>
        </div>

        <div className="form-group">
          <label>School Name</label>
          <input type="text"/>
        </div>

        <div className="form-group">
          <label>Year of Passing</label>
          <input type="number"/>
        </div>

        <div className="form-group">
          <label>Physics Marks</label>
          <input type="number"/>
        </div>

        <div className="form-group">
          <label>Chemistry Marks</label>
          <input type="number"/>
        </div>

        <div className="form-group">
          <label>Mathematics Marks</label>
          <input type="number"/>
        </div>

      </div>


      {/* Diploma Checkbox */}

      <div className="checkbox-section">
        <input
          type="checkbox"
          onChange={() => setDiploma(!diploma)}
        />
        <label>Diploma Candidate</label>
      </div>

      {diploma && (

        <>
          <h3>Diploma Details</h3>

          <div className="form-grid">

            <div className="form-group">
              <label>Diploma Course</label>
              <input type="text"/>
            </div>

            <div className="form-group">
              <label>Institute Name</label>
              <input type="text"/>
            </div>

            <div className="form-group">
              <label>Year of Passing</label>
              <input type="number"/>
            </div>

            <div className="form-group">
              <label>Percentage</label>
              <input type="text"/>
            </div>

          </div>
        </>
      )}


      {/* Graduation Checkbox */}

      <div className="checkbox-section">
        <input
          type="checkbox"
          onChange={() => setGraduation(!graduation)}
        />
        <label>PG Candidate (Graduation Details)</label>
      </div>

      {graduation && (

        <>
          <h3>Graduation Details</h3>

          <div className="form-grid">

            <div className="form-group">
              <label>Degree</label>
              <input type="text"/>
            </div>

            <div className="form-group">
              <label>College Name</label>
              <input type="text"/>
            </div>

            <div className="form-group">
              <label>University</label>
              <input type="text"/>
            </div>

            <div className="form-group">
              <label>Year of Passing</label>
              <input type="number"/>
            </div>

            <div className="form-group">
              <label>Percentage / CGPA</label>
              <input type="text"/>
            </div>

          </div>
        </>
      )}
      {/* Entrance Exam Checkbox */}

      <div className="checkbox-section">
        <input
          type="checkbox"
          onChange={() => setExam(!exam)}
        />
        <label>Entrance Exam Written</label>
      </div>

      {exam && (

        <>
          <h3>Entrance Exam Details</h3>

          <div className="form-grid">

            <div className="form-group">
              <label>Exam Name</label>  
              <input type="text"/>
              <label>Exam Name</label>  
              <input type="text"/>
              <label>Exam Name</label>
              <input type="text"/>
            </div>

            <div className="form-group">
              <label>Score / Rank</label>
              <input type="text"/>
              <label>Score / Rank</label>
              <input type="text"/>
              <label>Score / Rank</label>
              <input type="text"/>
            </div>

            <div className="form-group">
              <label>Exam Year</label>
              <input type="number"/>
              <label>Exam Year</label>
              <input type="number"/>
              <label>Exam Year</label>
              <input type="number"/>
            </div>

          </div>
        </>
      )}

      <div className="form-buttons">
        <button className="cancel" onClick={()=>Nav("/AddressDetails")}>Back</button>
        <button className="next" onClick={()=>Nav("/UploadDetails")}>Next</button>
      </div>

    </div>
  );
}

export default AcademicDetails;