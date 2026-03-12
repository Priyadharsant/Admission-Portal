import React, { useState } from "react";
import "./UserApplicationForm.css";

export default function UserApplicationForm() {

    const [entranceChecked, setEntranceChecked] = useState(false);

    const [exams, setExams] = useState([
        { examName: "", score: "", year: "" }
    ]);

    const addExam = () => {
        setExams([...exams, { examName: "", score: "", year: "" }]);
    };

    const handleExamChange = (index, event) => {
        const values = [...exams];
        values[index][event.target.name] = event.target.value;
        setExams(values);
    };

    const [diplomaChecked, setDiplomaChecked] = useState(false);
    const [graduationChecked, setGraduationChecked] = useState(false);

    const [permanentAddress, setPermanentAddress] = useState("");
    const [permanentCity, setPermanentCity] = useState("");
    const [permanentState, setPermanentState] = useState("");
    const [permanentPin, setPermanentPin] = useState("");

    const [tempAddress, setTempAddress] = useState("");
    const [tempCity, setTempCity] = useState("");
    const [tempState, setTempState] = useState("");
    const [tempPin, setTempPin] = useState("");

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);

    const isFormValid =
        firstName.trim() !== "" &&
        email.trim() !== "" &&
        mobile.trim() !== "" &&
        isAgreed === true;

    const handleSubmit = () => {
        alert("Form Submitted Successfully!");
    }

    return (
        <div className="container">

            <header className="header">

<div className="header-left">
<img src="/public/logo.png" alt="TNEA"/>
</div>

<h1 className="portal-title">
VEC – Admission Portal
</h1>

<div className="header-right">

<img src="/public/NAAC.png" alt="NAAC"/>
<img src="/public/NBA.png" alt="NBA"/>
<img src="/public/ISO.png" alt="ISO"/>
<img src="/public/TNEA.png" alt="QS"/>

</div>

</header>


            {/* BASIC DETAILS */}

            <section className="card">
                <h2>Basic Details</h2>

                <div className="grid3">
                    <div>
                        <label>Application Number</label>
                        <input placeholder="Auto Generated" />
                    </div>

                    <div>
                        <label>Admission Year</label>
                        <select name="" id="">
                            <option>2026</option>
                            <option>2027</option>
                        </select>
                    </div>

                    <div>
                        <label>Admission Type</label>
                        <select>
                            <option>Regular</option>
                            <option>Lateral Entry</option>
                        </select>
                    </div>

                    <div>
                        <label>Program Level</label>
                        <select>
                            <option>Undergraduate</option>
                        </select>
                    </div>

                    <div>
                        <label>Program / Course</label>
                        <select>
                            <option>B.Tech Artificial Intelligence</option>
                        </select>
                    </div>

                    <div>
                        <label>Department</label>
                        <select>
                            <option>Artificial Intelligence</option>
                        </select>
                    </div>

                    <div>
                        <label>Mode of Study</label>
                        <select>
                            <option>Full Time</option>
                        </select>
                    </div>

                    <div>
                        <label>Hostel Required</label>
                        <select>
                            <option>Select</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>
            </section>


            {/* PERSONAL DETAILS */}

            <section className="card">
                <h2>Personal Details</h2>

                <div className="grid4">

                    <div>
                        <label>Title</label>
                        <select>
                            <option>Select</option>
                            <option>Mr</option>
                        </select>
                    </div>

                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Mobile Number</label>
                        <input
                            type="number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Alternate Mobile</label>
                        <input type="text" />
                    </div>

                </div>

                <div className="grid3">

                    <div>
                        <label>Gender</label>
                        <select>
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label>Date of Birth</label>
                        <input type="date" />
                    </div>

                    <div>
                        <label>Blood Group</label>
                        <select>
                            <option>A+</option>
                            <option>B+</option>
                            <option>O+</option>
                        </select>
                    </div>

                    <div>
                        <label>Category</label>
                        <select>
                            <option>Select</option>
                            <option>General</option>
                            <option>OBC</option>
                            <option>SC</option>
                            <option>ST</option>
                        </select>
                    </div>

                </div>
                <div className="grid4">
                    <div>
                        <label>Religion</label>
                        <input type="text" placeholder="Enter Religion" />
                    </div>

                    <div>
                        <label>Nationality</label>
                        <input type="text" placeholder="Enter Nationality" />
                    </div>

                    <div>
                        <label>Aadhar Number</label>
                        <input type="text" placeholder="Enter Aadhar Number" />
                    </div>
                </div>
            </section>


            {/* PARENTS DETAILS */}

            <section className="card">
                <h2>Parents Details</h2>

                <h3>Father's Details</h3>

                <div className="grid3">
                    <input placeholder="Father Name" />
                    <input placeholder="Mobile" />
                    <input placeholder="Occupation" />
                    <input placeholder="Email" />
                    <input placeholder="Family Annual Income" />
                </div>

                <h3>Mother's Details</h3>

                <div className="grid3">
                    <input placeholder="Mother Name" />
                    <input placeholder="Mobile" />
                    <input placeholder="Occupation" />
                    <input placeholder="Email" />
                    <input placeholder="Family Annual Income" />
                </div>

            </section>


            {/* ADDRESS DETAILS */}

            <section className="card">

                <h2>Address Details</h2>

                <h3>Permanent Address</h3>

                <div className="grid3">
                    <input
                        value={permanentAddress}
                        onChange={(e) => setPermanentAddress(e.target.value)}
                        placeholder="Address"
                    />

                    <input
                        value={permanentCity}
                        onChange={(e) => setPermanentCity(e.target.value)}
                        placeholder="City"
                    />

                    <input
                        value={permanentState}
                        onChange={(e) => setPermanentState(e.target.value)}
                        placeholder="State"
                    />

                    <input
                        value={permanentPin}
                        onChange={(e) => setPermanentPin(e.target.value)}
                        placeholder="Pincode"
                    />
                </div>

                <label className="check">
                    <input
                        type="checkbox"
                        onChange={(e) => {
                            if (e.target.checked) {
                                setTempAddress(permanentAddress)
                                setTempCity(permanentCity)
                                setTempState(permanentState)
                                setTempPin(permanentPin)
                            } else {
                                setTempAddress("")
                                setTempCity("")
                                setTempState("")
                                setTempPin("")
                            }
                        }}
                    />
                    Temporary address same as Permanent
                </label>

                <h3>Temporary Address</h3>

                <div className="grid3">
                    <input value={tempAddress} onChange={(e) => setTempAddress(e.target.value)} />
                    <input value={tempCity} onChange={(e) => setTempCity(e.target.value)} />
                    <input value={tempState} onChange={(e) => setTempState(e.target.value)} />
                    <input value={tempPin} onChange={(e) => setTempPin(e.target.value)} />
                </div>

            </section>


            {/* ACADEMIC DETAILS */}

            <section className="card">

                <h2>Academic Details</h2>

                <h3>10th Qualification</h3>

                <div className="grid3">
                    <input placeholder="Board" />
                    <input placeholder="School Name" />
                    <input placeholder="Year of Passing" />
                    <input placeholder="Percentage / CGPA" />
                </div>


                <h3>12th Qualification</h3>

                <div className="grid3">
                    <input placeholder="Board" />
                    <input placeholder="School Name" />
                    <input placeholder="Year of Passing" />
                    <input placeholder="Physics Marks" />
                    <input placeholder="Chemistry Marks" />
                    <input placeholder="Maths Marks" />
                </div>

                <div className="academicOptions">

                    <label>
                        <input
                            type="checkbox"
                            checked={entranceChecked}
                            onChange={(e) => setEntranceChecked(e.target.checked)}
                        />
                        Entrance Exam Details
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={diplomaChecked}
                            onChange={(e) => setDiplomaChecked(e.target.checked)}
                        />
                        Diploma Details
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={graduationChecked}
                            onChange={(e) => setGraduationChecked(e.target.checked)}
                        />
                        Graduation Details
                    </label>

                </div>

                {entranceChecked && (

                    <div className="academicBox">

                        <h3>Entrance Exam Details</h3>

                        {exams.map((exam, index) => (

                            <div className="grid3" key={index}>

                                <div>
                                    <label>Exam Name</label>
                                    <input
                                        type="text"
                                        name="examName"
                                        value={exam.examName}
                                        onChange={(e) => handleExamChange(index, e)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label>Score / Rank</label>
                                    <input
                                        type="text"
                                        name="score"
                                        value={exam.score}
                                        onChange={(e) => handleExamChange(index, e)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label>Year</label>
                                    <input
                                        type="text"
                                        name="year"
                                        value={exam.year}
                                        onChange={(e) => handleExamChange(index, e)}
                                        required
                                    />
                                </div>

                            </div>

                        ))}

                        <button
                            type="button"
                            className="addBtn"
                            onClick={addExam}
                        >
                            + Add Another Exam
                        </button>

                    </div>

                )}

                {diplomaChecked && (

                    <div className="academicBox">

                        <h3>Diploma Details</h3>

                        <div className="grid3">

                            <div>
                                <label>College Name</label>
                                <input type="text" required={diplomaChecked} />
                            </div>

                            <div>
                                <label>Branch</label>
                                <input type="text" required={diplomaChecked} />
                            </div>

                            <div>
                                <label>Percentage / CGPA</label>
                                <input type="text" required={diplomaChecked} />
                            </div>

                        </div>

                    </div>

                )}

                {graduationChecked && (

                    <div className="academicBox">

                        <h3>Graduation Details</h3>

                        <div className="grid3">

                            <div>
                                <label>University</label>
                                <input type="text" required={graduationChecked} />
                            </div>

                            <div>
                                <label>Degree</label>
                                <input type="text" required={graduationChecked} />
                            </div>

                            <div>
                                <label>CGPA</label>
                                <input type="text" required={graduationChecked} />
                            </div>

                        </div>

                    </div>

                )}


            </section>



            {/* DOCUMENT UPLOAD */}

            <section className="card">

                <h2>Upload Documents</h2>

                <div className="grid3">

                    <div className="upload">
                        <label>Passport Photo</label>
                        <input type="file" />
                    </div>

                    <div className="upload">
                        <label>Student Signature</label>
                        <input type="file" />
                    </div>

                    <div className="upload">
                        <label>10th Marksheet</label>
                        <input type="file" />
                    </div>

                    <div className="upload">
                        <label>12th Marksheet</label>
                        <input type="file" />
                    </div>

                    <div className="upload">
                        <label>Transfer Certificate</label>
                        <input type="file" />
                    </div>

                    <div className="upload">
                        <label>Caste Certificate</label>
                        <input type="file" />
                    </div>

                    <div className="upload">
                        <label>Income Certificate</label>
                        <input type="file" />
                    </div>

                    <div className="upload">
                        <label>ID Proof</label>
                        <input type="file" />
                    </div>

                </div>

                <div className="declarationBox">

                    <p className="declarationText">
                        I hereby declare that the documents uploaded by me are genuine and the
                        information provided in this application form is true to the best of my knowledge.
                    </p>

                    <div className="declarationRow">

                        <label className="agreeLabel">
                            <input
                                type="checkbox"
                                checked={isAgreed}
                                onChange={(e) => setIsAgreed(e.target.checked)}
                            />
                            <span>I agree to the declaration</span>
                        </label>

                        <button
                            className="submitBtn"
                            disabled={!isFormValid}
                        >
                            Submit
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
}