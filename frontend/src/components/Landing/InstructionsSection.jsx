import { useState, useEffect } from "react";
import styles from "./InstructionsSection.module.css";

function InstructionsSection({
  title,
  subtitle,
  image,
  instructions = [],
  steps = []
}) {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.instructions}>

      <div className={styles.instructionsHeader}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={styles.instructionsContainer}>

        {/* Illustration */}
        <div className={styles.instructionsImage}>
          {visible && <img src={image} alt="Instructions Illustration"/>}
        </div>

        {/* Instruction Content */}
        <div className={styles.instructionsCard}>

          <ul>
            {instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className={styles.instructionSteps}>

            {steps.map((step, index) => (
              <div className={styles.step} key={index}>
                <span>{step.number}</span>
                {step.text}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default InstructionsSection;