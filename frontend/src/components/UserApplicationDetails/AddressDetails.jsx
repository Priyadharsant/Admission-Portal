import React, { useState } from "react";
import "./AddressDetails.css";
import { useNavigate } from "react-router-dom";

function AddressDetails() {

    const Nav=useNavigate()
  const [permanent, setPermanent] = useState({
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [temporary, setTemporary] = useState({
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [sameAddress, setSameAddress] = useState(false);

  const handlePermanentChange = (e) => {
    const { name, value } = e.target;

    const updated = { ...permanent, [name]: value };
    setPermanent(updated);

    if (sameAddress) {
      setTemporary(updated);
    }
  };

  const handleTemporaryChange = (e) => {
    const { name, value } = e.target;
    setTemporary({ ...temporary, [name]: value });
  };

  const handleCheckbox = (e) => {
    const checked = e.target.checked;
    setSameAddress(checked);

    if (checked) {
      setTemporary(permanent);
    } else {
      setTemporary({
        address: "",
        city: "",
        state: "",
        pincode: ""
      });
    }
  };

  return (
    <div className="form-container">

      <h2>Address Details</h2>

      {/* Permanent Address */}

      <h3>Permanent Address</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={permanent.address}
            onChange={handlePermanentChange}
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={permanent.city}
            onChange={handlePermanentChange}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={permanent.state}
            onChange={handlePermanentChange}
          />
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={permanent.pincode}
            onChange={handlePermanentChange}
          />
        </div>

      </div>

      {/* Checkbox */}

      <div style={{marginTop:"20px"}}>
        <input
          type="checkbox"
          checked={sameAddress}
          onChange={handleCheckbox}
        />
        <label style={{marginLeft:"8px"}}>
          Temporary address same as Permanent
        </label>
      </div>

      {/* Temporary Address */}

      <h3 style={{marginTop:"20px"}}>Temporary Address</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={temporary.address}
            onChange={handleTemporaryChange}
            disabled={sameAddress}
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={temporary.city}
            onChange={handleTemporaryChange}
            disabled={sameAddress}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={temporary.state}
            onChange={handleTemporaryChange}
            disabled={sameAddress}
          />
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={temporary.pincode}
            onChange={handleTemporaryChange}
            disabled={sameAddress}
          />
        </div>

      </div>

      <div className="form-buttons">
        <button className="cancel" onClick={()=>Nav("/GuardianDetails")}>Back</button>
        <button className="next" onClick={()=>Nav("/AcademicDetails")}>Next</button>
      </div>

    </div>
  );
}

export default AddressDetails;