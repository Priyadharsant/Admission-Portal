import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({
  logo,
  tnea,
  extraImages = [],
  title = "ADMISSION PORTAL",
  collegeName = "VELAMMAL",
  collegeFull = "ENGINEERING COLLEGE",
  tagline = "The Wheel of Knowledge rolls on!",
  subtitle = "(An Autonomous Institution)"
}) {

  const [loaded, setLoaded] = useState(false);

  /* Example Hook */

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className={styles.navbar}>

      {/* LEFT SECTION */}
      <div className={styles.leftSection}>

        <div className={styles.logoBox}>
          <img src={logo} className={styles.logo} alt="college logo"/>

          <div className={styles.collegeText}>
            <h1>{collegeName}</h1>
            <p>{collegeFull}</p>
            <p>{tagline}</p>
            <p>{subtitle}</p>
          </div>
        </div>

        {/* Dynamic Images */}
        <div className={styles.extraImages}>
          {extraImages.map((img, index) => (
            <img key={index} src={img} alt="certificate"/>
          ))}
        </div>

      </div>

      {/* CENTER TITLE */}
      <div className={styles.centerTitle}>
        {loaded && title}
      </div>

    </nav>
  );
}