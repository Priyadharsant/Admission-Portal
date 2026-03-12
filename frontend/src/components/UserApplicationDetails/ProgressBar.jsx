import React from "react";
import "./ProgressBar.css";

function ProgressBar({ step }) {
  return (
    <div className="progressbar">

      <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
        <span className="circle">{step > 1 ? "✔" : "1"}</span>
        Basic Details
      </div>

      <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
        <span className="circle">{step > 2 ? "✔" : "2"}</span>
        Personal Details
      </div>

      <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
        <span className="circle">{step > 3 ? "✔" : "3"}</span>
        Parents Details
      </div>

      <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
        <span className="circle">{step > 4 ? "✔" : "4"}</span>
        Guardian Details
      </div>

      
      <div className={`progress-step ${step >= 5 ? "active" : ""}`}>
        <span className="circle">{step > 5 ? "✔" : "5"}</span>
        Address Details
      </div>
      <div className={`progress-step ${step >= 6 ? "active" : ""}`}>
        <span className="circle">{step > 6 ? "✔" : "6"}</span>
        Academic Details
      </div>

      <div className={`progress-step ${step >= 7 ? "active" : ""}`}>
        <span className="circle">{step > 7 ? "✔" : "7"}</span>
        Upload Details
      </div>

    </div>
  );
}

export default ProgressBar;