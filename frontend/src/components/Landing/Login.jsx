import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { Turnstile } from "@marsidev/react-turnstile";
import tnea from "../../assets/tnea.png";

export default function FormSection() {

    const [activeTab, setActiveTab] = useState("register");
    const [loginMode, setLoginMode] = useState("password");
    const [formData, setFormData] = useState({});
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetch("http://localhost:5000/application")
            .then(res => res.json())
            .then(data => {
                setStates(data.states);
                setCities(data.cities);
                setPrograms(data.programs);
                setCourses(data.courses);
            });

    }, []);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {

        e.preventDefault();
        console.log("Form Data:", formData);

        const payload = {
            data: {
                name: formData.name,
                program_details: {
                    program: formData.program,
                    course: formData.course
                },
                personal_details: {
                    first_name: formData.name,
                    email: formData.email,
                    phone_no: formData.phone_no
                },
                address_details: {
                    state: formData.state,
                    city: formData.city
                }
            }
        };
        console.log("Payload:", payload);

        const res = await fetch("http://localhost:5000/api/credential/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        console.log(data);
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        const payload = {
            email: formData.login_email,
            password: formData.password
        };

        const res = await fetch("http://localhost:5000/api/credential/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        console.log(data);

    };

    return (

        <section className={styles.section}>

            <div className={styles.overlay}></div>

            {/* TNEA Code */}
            <img src={tnea} alt="TNEA Code" className={styles.tnea} />

            <div className={styles.container}>

                {/* LEFT SIDE */}
                <div className={styles.callingBox}>

                    <h1>Calling <br />

                        <span>Bachelor of Technology & Engineering</span><br />

                        and <br />

                        <span>Master of Engineering</span><br />

                        Aspirants

                    </h1>


                </div>


                {/* RIGHT SIDE FORM */}
                <div className={styles.formContainer}>

                    <h2>Admissions Open 2026</h2>

                    <div className={styles.tabs}>

                        <button
                            className={`${styles.tabButton} ${activeTab === "register" ? styles.active : ""}`}
                            onClick={() => setActiveTab("register")}
                        >
                            Register
                        </button>

                        <button
                            className={`${styles.tabButton} ${activeTab === "login" ? styles.active : ""}`}
                            onClick={() => setActiveTab("login")}
                        >
                            Login
                        </button>

                    </div>


                    {/* REGISTER */}
                    {activeTab === "register" && (

                        <form className={styles.form} onSubmit={handleRegister}>

                            <p>UG Application Form 2026</p>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name *"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email Address *"
                                onChange={handleChange}
                            />

                            <div className={styles.phoneRow}>

                                <select>
                                    <option>+91</option>
                                </select>

                                <input
                                    type="tel"
                                    name="phone_no"
                                    placeholder="Enter Mobile Number *"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    onChange={handleChange}
                                    title="Enter a valid 10-digit mobile number"
                                    required
                                />

                            </div>

                            <div className={styles.grid}>

                                <select name="state" onChange={handleChange} required>

                                    <option value="">Select State *</option>

                                    {states.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}

                                </select>

                                <select name="city" onChange={handleChange} required>
                                    <option value="">Select City *</option>

                                    {cities.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}

                                </select>
                            </div>

                            <div className={styles.grid}>

                                <select name="program" onChange={handleChange} required>

                                    <option value="">Select Program *</option>

                                    {programs.map((p) => (
                                        <option key={p} value={p}>{p}</option>
                                    ))}

                                </select>

                                <select name="course" onChange={handleChange} required>

                                    <option value="">Select Course *</option>

                                    {courses.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}

                                </select>

                            </div>

                            <div className={styles.captcha}>
                                <Turnstile siteKey="0x4AAAAAACpwC8jw4RBLF4Ei" />
                            </div>

                            <label className={styles.checkbox}>
                                <input type="checkbox" />
                                I authorize Velammal Engineering College and its representatives to contact me via Email, SMS, WhatsApp, or Call for updates and notifications, even if I am on DND/NDNC * *
                            </label>

                            <button type="submit" className={styles.applyBtn}>
                                REGISTER
                            </button>

                        </form>

                    )}


                    {/* LOGIN */}
                    {activeTab === "login" && (

                        <form className={styles.form} onSubmit={handleLogin}>

                            <input
                                type="email"
                                name="login_email"
                                placeholder="Email Address *"
                                onChange={handleChange}
                            />

                            {/* PASSWORD LOGIN */}
                            {loginMode === "password" && (
                                <>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password *"
                                        onChange={handleChange}
                                    />
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginTop: "6px" }}>
                                        <span
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setLoginMode("otp")}
                                        >
                                            Login with OTP
                                        </span>

                                        <span style={{ cursor: "pointer" }}>
                                            Forgot Password?
                                        </span>
                                    </div>
                                </>
                            )}

                            {/* OTP LOGIN */}
                            {loginMode === "otp" && (
                                <>
                                    <input
                                        type="text"
                                        name="otp"
                                        placeholder="Enter OTP"
                                        onChange={handleChange}
                                    />

                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginTop: "6px" }}>
                                        <span
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setLoginMode("password")}
                                        >
                                            Login with Password
                                        </span>

                                        <span style={{ cursor: "pointer" }}>
                                            Resend OTP
                                        </span>
                                    </div>
                                </>
                            )}

                            <div className={styles.captcha}>
                                <Turnstile siteKey="0x4AAAAAACpwC8jw4RBLF4Ei" />
                            </div>

                            <button type="submit" className={styles.applyBtn}>
                                LOGIN
                            </button>

                        </form>

                    )}

                </div>

            </div>


            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                B.Tech, B.E., M.E., and MBA Aspirants Call: +91 89392 21120
            </div>

        </section>

    );

}