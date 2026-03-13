import { useState, useEffect } from "react";
import styles from "./AdmissionSteps.module.css";

function StepsSection({ title, subtitle, steps }) {

  const [visible, setVisible] = useState(false);

  /* simple hook example */

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.steps}>

      {/* Heading */}
      <div className={styles.headingBox}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.subHeading}>{subtitle}</p>
      </div>

      {/* Steps Grid */}
      <div className={styles.stepsGrid}>

        {visible &&
          steps.map((step, index) => (

            <div className={styles.stepCard} key={index}>

              <span className={styles.stepNumber}>
                {step.number}
              </span>

              <div className={styles.stepIcon}>
                {step.icon}
              </div>

              <h3 className={styles.stepTitle}>
                {step.title}
              </h3>

            </div>

          ))
        }

      </div>

    </section>
  );
}

export default StepsSection;