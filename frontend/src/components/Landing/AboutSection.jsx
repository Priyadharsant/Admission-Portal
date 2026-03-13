import { useState, useEffect } from "react";
import styles from "./AboutSection.module.css";

function AboutSection({
  tagline,
  title,
  subtitle,
  description1,
  description2,
  image
}) {

  const [visible, setVisible] = useState(false);

  /* Example hook for animation or loading */

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.aboutSection}>

      <div className={styles.aboutContainer}>

        <div className={styles.aboutText}>

          <p className={styles.aboutTagline}>{tagline}</p>

          <h2>{title}</h2>

          <h4>{subtitle}</h4>

          <p>{description1}</p>

          <p>{description2}</p>

        </div>

        <div className={styles.aboutImage}>
          {visible && <img src={image} alt="About College" />}
        </div>

      </div>

    </section>
  );
}

export default AboutSection;