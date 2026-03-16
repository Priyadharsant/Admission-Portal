import styles from "./Login.module.css";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import tnea from "../../assets/tnea.png";

export default function FormSection() {

    const [activeTab, setActiveTab] = useState("register");
    const [loginMode, setLoginMode] = useState("password");

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

                        <form className={styles.form}>

                            <p>UG Application Form 2026</p>

                            <input type="text" placeholder="Enter Name *" />

                            <input type="email" placeholder="Enter Email Address *" />

                            <div className={styles.phoneRow}>

                                <select>
                                    <option>+91</option>
                                </select>

                                <input
                                    type="tel"
                                    placeholder="Enter Mobile Number *"
                                    pattern="[0-9]{10}"
                                    maxlength="10"
                                    title="Enter a valid 10-digit mobile number"
                                    required
                                />

                            </div>

                            <div className={styles.grid}>

                                <select>
                                    <option>Select State *</option>
                                </select>

                                <select>
                                    <option>Select City *</option>
                                </select>

                            </div>

                            <div className={styles.grid}>

                                <select>
                                    <option>Select Program *</option>
                                </select>

                                <select>
                                    <option>Select Course *</option>
                                </select>

                            </div>

                            <div className={styles.captcha}>
                                <Turnstile siteKey="0x4AAAAAACpwC8jw4RBLF4Ei" />
                            </div>

                            <label className={styles.checkbox}>
                                <input type="checkbox" />
                                I authorize Velammal Engineering College and its representatives to contact me via Email, SMS, WhatsApp, or Call for updates and notifications, even if I am on DND/NDNC * *
                            </label>

                            <button className={styles.applyBtn}>
                                REGISTER
                            </button>

                        </form>

                    )}


                    {/* LOGIN */}
                    {activeTab === "login" && (

                        <form className={styles.form}>

                            <input type="email" placeholder="Email Address *" />

                            {/* PASSWORD LOGIN */}
                            {loginMode === "password" && (
                                <>
                                    <input type="password" placeholder="Password *" />

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
                                    <input type="text" placeholder="Enter OTP" />

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

                            <button className={styles.applyBtn}>
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