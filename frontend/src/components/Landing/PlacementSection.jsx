import React, { useEffect, useState, useRef } from "react";
import styles from "./PlacementSection.module.css";

import { FaUserGraduate, FaRocket, FaBuilding, FaChartLine } from "react-icons/fa";

/* Counter Component */

function Counter({ end, suffix, startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [startAnimation, end]);

  return (
    <h2>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
}

function PlacementSection() {

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const data = [
    {
      icon: <FaUserGraduate />,
      number: 34500,
      suffix: "+",
      title: "Active Learners",
    },
    {
      icon: <FaRocket />,
      number: 25,
      suffix: " LPA",
      title: "Highest Salary Offered",
    },
    {
      icon: <FaBuilding />,
      number: 300,
      suffix: "+",
      title: "Hiring Partners",
    },
    {
      icon: <FaChartLine />,
      number: 52,
      suffix: "%",
      title: "Average Salary Hike",
    },
  ];

  /* Intersection Observer */

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <section className={styles.placement} ref={sectionRef}>

      <h1 className={styles.placementTitle}>About Us</h1>

      <div className={styles.placementContainer}>

        {data.map((item, index) => (

          <div className={styles.placementCard} key={index}>

            <div className={styles.placementIcon}>{item.icon}</div>

            <Counter
              end={item.number}
              suffix={item.suffix}
              startAnimation={visible}
            />

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PlacementSection;