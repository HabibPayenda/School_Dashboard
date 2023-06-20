import React from "react";
import styles from "./schoolTeachers.module.css";

import teachersImage from "../../assets/teachers.jpg";
import teacherImage from "../../assets/teacher.jpg";
import { Link } from "react-router-dom";

function SchoolTeachers() {
  return (
    <div>
      {/* Hero section */}
      <section className={styles.hero}>
        <img src={teachersImage} alt="Afghan School Teachers" />
        <div className={styles["hero-text"]}>
          <h1>Meet Our Afghan School Teachers</h1>
          <p>
            Our dedicated and experienced teachers are the heart of our school.
            They are committed to providing our students with a high-quality
            education that prepares them for success in college and beyond.
            Learn more about our teachers below.
          </p>
          <Link to="/home/teacher_login" className={styles["login-btn"]}>
            Teacher Login
          </Link>
        </div>
      </section>

      {/* Teachers section */}
      <section className={styles.teachers}>
        <h2>Our Teachers</h2>
        <div className={styles["teacher-cards"]}>
          <div className={styles["teacher-card"]}>
            <img src={teacherImage} alt="Teacher 2" />
            <h3>Mr. Rahim</h3>
            <p className={styles["teacher-subject"]}>Science</p>
            <p className={styles["teacher-bio"]}>
              Mr. Rahim is a former engineer who decided to become a teacher to
              inspire the next generation of Afghan scientists. He believes that
              hands-on experiments and real-world examples are the key to
              sparking students' interest in science.
            </p>
          </div>
          <div className={styles["teacher-card"]}>
            <img src={teacherImage} alt="Teacher 2" />
            <h3>Mr. Rahim</h3>
            <p className={styles["teacher-subject"]}>Science</p>
            <p className={styles["teacher-bio"]}>
              Mr. Rahim is a former engineer who decided to become a teacher to
              inspire the next generation of Afghan scientists. He believes that
              hands-on experiments and real-world examples are the key to
              sparking students' interest in science.
            </p>
          </div>
          <div className={styles["teacher-card"]}>
            <img src={teacherImage} alt="Teacher 2" />
            <h3>Mr. Rahim</h3>
            <p className={styles["teacher-subject"]}>Science</p>
            <p className={styles["teacher-bio"]}>
              Mr. Rahim is a former engineer who decided to become a teacher to
              inspire the next generation of Afghan scientists. He believes that
              hands-on experiments and real-world examples are the key to
              sparking students' interest in science.
            </p>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className={styles.footer}>
        <p>&copy; 2023 Afghan School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SchoolTeachers;
