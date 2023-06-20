import React from "react";
import styles from "./schoolTeachers.module.css";

function SchoolTeachers() {
  return (
    <div>
      {/* Hero section */}
      <section className="hero">
        <img
          src="https://example.com/teachers-image.jpg"
          alt="Afghan School Teachers"
        />
        <div className={styles["hero-text"]}>
          <h1>Meet Our Afghan School Teachers</h1>
          <p>
            Our dedicated and experienced teachers are the heart of our school.
            They are committed to providing our students with a high-quality
            education that prepares them for success in college and beyond.
            Learn more about our teachers below.
          </p>
          <button className={styles["login-btn"]}>Login</button>
        </div>
      </section>

      {/* Teachers section */}
      <section className={styles.teachers}>
        <h2>Our Teachers</h2>
        <div className={styles["teacher-cards"]}>
          <div className={styles["teacher-card"]}>
            <img src="https://example.com/teacher1.jpg" alt="Teacher 1" />
            <h3>Ms. Fatima</h3>
            <p className={styles["teacher-subject"]}>Mathematics</p>
            <p className={styles["teacher-bio"]}>
              Ms. Fatima has been teaching mathematics at the Afghan School for
              over 10 years. She is passionate about helping her students
              understand complex mathematical concepts and develop critical
              thinking skills.
            </p>
          </div>
          <div className={styles["teacher-card"]}>
            <img src="https://example.com/teacher2.jpg" alt="Teacher 2" />
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
            <img src="https://example.com/teacher3.jpg" alt="Teacher 3" />
            <h3>Ms. Zainab</h3>
            <p className={styles["teacher-subject"]}>English</p>
            <p className={styles["teacher-bio"]}>
              Ms. Zainab is a graduate of Kabul University and has been teaching
              English at the Afghan School for 5 years. She is dedicated to
              helping her students improve their reading, writing, and speaking
              skills.
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
